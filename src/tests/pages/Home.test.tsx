import {render, screen} from '@testing-library/react'
import { stripe } from '../../services/stripe'
import Home from '../../pages'
import { mocked } from 'jest-mock'
import { getStaticProps } from '../../pages/index';

jest.mock('next/router')

jest.mock('next-auth/react' , () => {
  return {
    useSession: () => [null, false]
  }
})

jest.mock('../../services/stripe')

describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home product={{
      priceId: 'fake-price-id',
      amount: '$9.90'
    }}/>)

    expect(screen.getByText('$9.90 month')).toBeInTheDocument()
  });

  it('loads initial data', async () => {
    const retrieveStripePricesMocked = mocked(stripe.prices.retrieve)

    // use mockResolvedValueOnce to mock the return of the function for promise
    retrieveStripePricesMocked.mockResolvedValueOnce({
      id: 'fake-price-id',
      unit_amount: 990
    } as any)


    const response = await getStaticProps({})

    // console.log(response)

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-price-id',
            amount: '$9.90'
          }
        }
      })
    )
  });
})

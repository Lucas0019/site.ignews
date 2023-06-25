import { render, screen } from '@testing-library/react'
import { ActiveLink } from '.'

// Mocking the useRouter hook
// jest.mock() is a function that receives two parameters:
jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

// describe() is a function that receives two parameters:
// it() is a function that receives two parameters:

describe('ActiveLink component', () => {
  // Testing the ActiveLink component
  it('renders correctly', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    // Verifying if the link is active
    // getByText() is a function that receives two parameters:
    // toBeInTheDocument() is a function that receives no parameters:
    expect(getByText('Home'),).toBeInTheDocument()
  })


  // Testing the ActiveLink component with a link that is not active
  it('adds active class if the link as curretly active', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    // Verifying if the link is active
    // Other way to verify if the link is active
    expect(screen.getByText('Home'),).toHaveClass('active')
  })
})

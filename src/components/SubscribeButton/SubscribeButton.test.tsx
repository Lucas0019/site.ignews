import { render, screen, fireEvent} from '@testing-library/react'
import { mocked } from 'jest-mock'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import { SubscribeButton } from '.'

jest.mock('next-auth/react')

jest.mock('next/router')


describe('SubscribeButton component', () => {
  it('renders correctly', () => {

    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
      update: jest.fn(),
    })

    render(
      <SubscribeButton/>
    )

    expect(screen.getByText('Subscribe now'),).toBeInTheDocument()
  })


  it('redirects user to sign in when not authenticated', () => {

    const signInMocked = mocked(signIn)
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
      update: jest.fn(),
    })


    render(<SubscribeButton/>)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })


  it('redirects to posts when user already has a subscription', () => {
    const useRouterMocked = mocked(useRouter)
    const useSessionMocked = mocked(useSession)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: 'John Doe',
          email: 'johndoe@example.com'
        },
        expires: 'fake-expires',
        activeSubscription: 'fake-active-subscription'
      },
      status: "authenticated",
      update: jest.fn(),
    } as any )

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    render(<SubscribeButton/>)

    const subscribeButton = screen.getByRole('button', {
      name: "Subscribe now"
    })

    fireEvent.click(subscribeButton)

    expect(pushMock).toHaveBeenCalledWith('/posts')
  })
})

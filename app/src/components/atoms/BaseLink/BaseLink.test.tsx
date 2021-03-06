import { render } from '@testing-library/react'
import BaseLink, { LinkState } from './BaseLink'

const setup = (
  value: string,
  href: string,
  state: LinkState,
  checked: boolean | undefined
) => {
  const utils = render(
    <BaseLink value={value} state={state} href={href} checked={checked} />
  )
  const link = utils.getByRole('link')

  jest.mock('next/link', () => {
    return ({ children }: any) => {
      return children
    }
  })
  return {
    ...utils,
    link,
  }
}

describe('BaseLink', () => {
  it('navigationのlinkにvalueが正しく渡っている', () => {
    const { link } = setup('Link', '/', 'navigation', undefined)
    expect(link).toBeInTheDocument()
  })
  it('morePostsのlinkにvalueが正しく渡っている', () => {
    const { link } = setup('Link', '/', 'morePosts', undefined)
    expect(link).toBeInTheDocument()
  })
  it('navigationのlinkに正しいclassが渡っている', () => {
    const { link } = setup('Link', '/', 'navigation', undefined)
    expect(link).toHaveClass('link')
  })
  it('morePostsのlinkに正しいclassが渡っている', () => {
    const { link } = setup('Link', '/', 'morePosts', undefined)
    expect(link).toHaveClass('link linkMorePosts')
  })
  it('checkedがpropsとして渡ると正しいclassが付与されている', () => {
    const { link } = setup('Link', '/', 'navigation', true)
    expect(link).toHaveClass('link checkedLink')
  })
})

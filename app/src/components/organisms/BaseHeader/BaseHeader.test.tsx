import { render, screen } from '@testing-library/react'
import BaseHeader from './BaseHeader'
import { mockLinks } from '../../../lib'

const setup = () => {
  const utils = render(<BaseHeader links={mockLinks} />)
  const nav = utils.getByRole('navigation')
  const ul = utils.getByRole('list')
  const lists = utils.getAllByRole('listitem')
  return {
    ...utils,
    nav,
    ul,
    lists,
  }
}

describe('BaseHeader', () => {
  it('navタグが存在すること', () => {
    const { nav } = setup()
    expect(nav).toBeInTheDocument()
  })
  it('ulタグが存在すること', () => {
    const { ul } = setup()
    expect(ul).toBeInTheDocument()
  })
  it('liタグが存在すること', () => {
    const { lists } = setup()
    expect(lists).toHaveLength(2)
  })
  it('aタグが存在すること', () => {
    setup()
    expect(screen.getByRole('link', { name: 'a' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'b' })).toBeInTheDocument()
  })
  it('正しいclassが付与されていること', () => {
    const { nav, ul, lists } = setup()
    expect(nav).toHaveClass('nav')
    expect(ul).toHaveClass('list')
    lists.forEach((list) => {
      expect(list).toHaveClass('listItem')
    })
  })
})

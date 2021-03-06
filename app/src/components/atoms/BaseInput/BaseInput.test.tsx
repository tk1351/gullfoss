import { render, screen } from '@testing-library/react'
import BaseInput from './BaseInput'

const setup = (width: string, height: string) => {
  const utils = render(
    <BaseInput
      placeholder={'placeholder'}
      type={'text'}
      value={'Test'}
      onChange={jest.fn()}
      width={width}
      height={height}
    />
  )
  const input = utils.getByRole('textbox')
  return {
    ...utils,
    input,
  }
}

const width = '400px'
const height = '30px'

describe('BaseInput', () => {
  it('inputタグが存在する', () => {
    const { input } = setup(width, height)
    expect(input).toBeInTheDocument()
  })
  it('正しいclassが付与されている', () => {
    const { input } = setup(width, height)
    expect(input).toHaveClass('input')
  })
  it('正しいpropsが渡っている', () => {
    const { input } = setup(width, height)
    expect(screen.getByPlaceholderText('placeholder')).toBeTruthy()
    expect(input).toHaveValue('Test')
  })
  it('widthとheightがpropsにある場合はstyleが付与される', () => {
    const { input } = setup(width, height)
    expect(input).toHaveStyle(`width: ${width}; height: ${height};`)
  })
})

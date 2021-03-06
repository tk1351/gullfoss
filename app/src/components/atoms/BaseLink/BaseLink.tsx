import { VFC } from 'react'
import Link from 'next/link'
import styles from './BaseLink.module.css'
import { HrefObject } from '../../../types'

export type LinkState = 'navigation' | 'morePosts'

type Props = {
  value: string
  href: string | HrefObject
  state: LinkState
  checked?: boolean
}

const BaseLink: VFC<Props> = ({ value, href, state, checked }) => {
  const { link, linkMorePosts, checkedLink } = styles
  return (
    <Link href={href}>
      <a
        className={`${link} ${state === 'morePosts' && linkMorePosts} ${
          checked && checkedLink
        }`}
      >
        {value}
      </a>
    </Link>
  )
}

export default BaseLink

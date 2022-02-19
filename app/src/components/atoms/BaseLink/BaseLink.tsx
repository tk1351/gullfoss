import { VFC } from 'react'
import Link from 'next/link'
import styles from './BaseLink.module.css'

export type LinkState = 'navigation' | 'morePosts'

type HrefObject = {
  pathname: string
  query: { [key in 'page' | 'query']?: string }
}

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

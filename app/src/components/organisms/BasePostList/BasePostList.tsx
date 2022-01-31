import { VFC } from 'react'
import BaseItem from '../../molecules/BaseItem/BaseItem'
import styles from './BasePostList.module.css'

type Props = {
  items: {
    title: string
    date: string
  }[]
  posts?: boolean
}

const BasePostList: VFC<Props> = ({ items, posts }) => {
  const { articleList, postsPage } = styles
  return (
    <ul className={`${articleList} ${posts && postsPage}`}>
      {items.map((item, index) => (
        <BaseItem title={item.title} date={item.date} key={index} />
      ))}
    </ul>
  )
}

export default BasePostList
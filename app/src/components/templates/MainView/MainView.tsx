import { VFC } from 'react'
import styles from './MainView.module.css'
import BaseHeading2 from '../../atoms/BaseHeading2/BaseHeading2'
import BasePostList from '../../organisms/BasePostList/BasePostList'

type Props = {
  heading: string
  items: {
    title: string
    date: string
  }[]
}

const MainView: VFC<Props> = ({ heading, items }) => {
  const { wrapper } = styles
  return (
    <div className={wrapper}>
      <BaseHeading2 text={heading} />
      <BasePostList items={items} />
    </div>
  )
}

export default MainView

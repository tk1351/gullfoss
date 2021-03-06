import { VFC } from 'react'
import styles from './PostView.module.css'
import BaseHeading1 from '../../atoms/BaseHeading1/BaseHeading1'
import BaseDescription from '../../atoms/BaseDescription/BaseDescription'
import BaseDate from '../../atoms/BaseDate/BaseDate'
import BaseTags from '../../molecules/BaseTags/BaseTags'
import { CommonList } from '../../../api/types'
import { TagItem } from '../../../api/v1/tags'
import { PostItem } from '../../../api/v1/posts'
import { formatCreatedAt } from '../../../utils/formatDate'

type Props = {
  post: PostItem
}

const PostView: VFC<Props> = ({ post }) => {
  const { wrapper } = styles

  const { title, createdAt, tags, content } = post

  const orderedTags: CommonList<TagItem> = {
    contents: tags,
    totalCount: tags.length,
    offset: 0,
    limit: 10,
  }

  const orderedCreatedAt = formatCreatedAt(createdAt)
  return (
    <div className={wrapper}>
      <BaseHeading1 text={title} />
      <BaseDate date={orderedCreatedAt} />
      <BaseTags tags={orderedTags} />
      <BaseDescription body={content} />
    </div>
  )
}

export default PostView

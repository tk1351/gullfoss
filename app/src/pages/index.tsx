import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import MainPage from '../components/pages/MainPage/MainPage'
import BaseHeader from '../components/organisms/BaseHeader/BaseHeader'
import BaseFooter from '../components/organisms/BaseFooter/BaseFooter'
import { footerLinks, headerLinks } from '../lib'
import { client } from '../api'

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Gullfoss</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <main>
        <BaseHeader links={headerLinks} />
        <MainPage posts={posts} />
      </main>

      <BaseFooter links={footerLinks} />
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await client.v1.posts.$get()

  return {
    props: { posts },
    revalidate: 10,
  }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

export default Home

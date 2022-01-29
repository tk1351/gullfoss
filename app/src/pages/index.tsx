import type { NextPage } from 'next'
import Head from 'next/head'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import MainPage from '../components/pages/MainPage/MainPage'
import BaseHeader from '../components/organisms/BaseHeader/BaseHeader'
import BaseFooter from '../components/organisms/BaseFooter/BaseFooter'
import { headerLinks } from '../lib'

const Home: NextPage = () => {
  const footerLinks = [
    { icon: faTwitter, href: '#' },
    { icon: faGithub, href: '#' },
  ]
  return (
    <div>
      <Head>
        <title>Gullfoss</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <main>
        <BaseHeader links={headerLinks} />
        <MainPage />
      </main>

      <BaseFooter links={footerLinks} />
    </div>
  )
}

export default Home

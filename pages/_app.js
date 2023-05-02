import styles from '@component/styles/Home.module.css'
import '@component/styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '../components/Header'
// import Nav from '../components/Nav'
import { ProjectProvider } from '../components/context/ProjectContext'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <ProjectProvider>
      <Head>
        <title>Trevor Vardeman</title>
        <meta name="description" content="Trevor's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>
      <Header />
      <main className={`${styles.main} ${inter.className}`}>
        {/* <div className={styles.description}> */}
        <Component {...pageProps} />
        {/* </div> */}
      </main>
      <footer></footer>
    </ProjectProvider>
  )
}
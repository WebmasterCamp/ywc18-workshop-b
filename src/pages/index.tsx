import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>App Name</title>
        <meta name="description" content="App Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello World</div>
    </div>
  )
}

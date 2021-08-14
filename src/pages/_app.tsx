import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.OneSignal = window.OneSignal || []
    window.OneSignal.push(() => {
      window.OneSignal.init({
        appId: '5ac6ffac-0438-4b9d-a7d9-a974a2db9b9d',
        safari_web_id: 'web.onesignal.auto.0534d2b4-18a9-4e11-8788-4e680cd265b6',
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      })
    })

    return () => {
      window.OneSignal = undefined
    }
  }, [])

  return (
    <>
      <Head>
        <title>App Name</title>
        <meta name="description" content="App Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

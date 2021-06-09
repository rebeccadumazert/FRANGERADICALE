import '../public/fonts/fonts.css'

import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>FRANGE RADICALE</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

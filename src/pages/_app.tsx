import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/globals'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Front-end Challenge</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <meta
          name="description"
          content="Front end Challenge with NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App

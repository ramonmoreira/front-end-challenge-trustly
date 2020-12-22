import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global.styles'
import HeaderNav from 'components/HeaderNav'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Front-end Challenge</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <script
          src="//sandbox.paywithmybank.com/start/scripts/pwmb.js?accessId=D61EC9BAF0BB369B9438"
          type="text/javascript"
        ></script>
        <meta
          name="description"
          content="Front end Challenge with NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <HeaderNav />
      <Component {...pageProps} />
    </>
  )
}

export default App

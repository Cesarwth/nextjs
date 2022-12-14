import { AppProps } from 'next/app'
import Layout from '@components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  //Providders-Context/Providers, theme, data
  //Hacer Layout comun de todas las paginas para englobar
  //Pasar props adicionales
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp

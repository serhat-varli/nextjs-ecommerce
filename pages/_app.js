import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../component/layout/layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

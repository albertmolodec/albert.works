import 'tailwindcss/tailwind.css'

import { initAnalytics } from "../lib/analytics";
import Layout from '../components/layout'

if (process.env.NODE_ENV !== "development") {
  console.log('Init analytics')
  initAnalytics();
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

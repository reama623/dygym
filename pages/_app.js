import Layout from "../components/layout";
import "../styles/index.css";

import "../db/firebase";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

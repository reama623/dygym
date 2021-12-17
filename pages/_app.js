import Layout from "../components/layout";
import "../styles/index.css";

import { RecoilRoot } from "recoil";
// import "../db/firebase";
import "../utils/string.util";
import axios from "axios";

axios.defaults.baseURL = `${window.origin}/api`;

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;

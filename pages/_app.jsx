// import "../db/firebase";
import "../utils/string.util";
import axios from "axios";
import Layout from "../components/layout/index";

import "../styles/index.scss";
import { AppContext } from "../context/appContext";
import { useState } from "react";
import { SnackbarProvider } from "notistack";

if (typeof window !== "undefined") {
  axios.defaults.baseURL = `${window?.origin}/api`;
}

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider maxSnack={4}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SnackbarProvider>
  );
}

export default MyApp;

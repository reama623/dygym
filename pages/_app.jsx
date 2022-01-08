// import "../db/firebase";
import "../utils/string.util";
import axios from "axios";
import Layout from "../components/layout/index";

import "../styles/index.scss";
import { AppContext } from "../context/appContext";
import { useState } from "react";

if (typeof window !== "undefined") {
  axios.defaults.baseURL = `${window?.origin}/api`;
}

function MyApp({ Component, pageProps }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <AppContext.Provider value={{ drawer: { mobileOpen, handleDrawerToggle } }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;

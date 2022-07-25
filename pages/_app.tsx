import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import DataContext from "../contexts/dataContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DataContext>
        <Component {...pageProps} />
      </DataContext>
    </Layout>
  );
}

export default MyApp;

import { Html, Head, Main, NextScript } from "next/document";
import Layout from "../components/Layout";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-gradient-to-r from-blue-200  to-teal-100">
        <Layout>

          <Main />
          <NextScript />
        </Layout>
      </body>
    </Html>
  );
}

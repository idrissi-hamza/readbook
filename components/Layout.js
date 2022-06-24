import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Booksbook</title>
        <meta
          name="description"
          content="library for the books and shared reviews"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="px-4">
        <div className="flex justify-center items-center bg-white mx-auto w-2/4 rounded-lg my-16 p-16">
          <div className="text-xl font-medium">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;

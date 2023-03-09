import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="app theme-dark">
      <div className="container flex bg-background">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header/>
          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
}

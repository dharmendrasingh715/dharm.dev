import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="app theme-dark">
      <div className="bg-gray-500 h-screen">
        <div className="container mx-auto pt-20 w-full">
          <Head>
            <title>Dharmendra Singh Home Page</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="flex flex-col">
            <Header />
            <div className="border rounded-sm border-gray-400 bg-gray-300 ">
              Get started by editing <code>pages/index.js</code>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Aside from "@components/Aside";
import type { FC } from "react";
import { Button } from "@components/ui/button";

const Home: FC = () => {
  return (
    <div className="app min-h-screen bg-background font-sans">
      <div className="relative flex min-h-screen flex-col">
        <Head>
          <title>Dharmendra Singh Home Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="flex-1">
          <div className="border-b">
            <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
              <Aside />
              Get started by editing the <code>pages/index.js</code>
              <Button className="bg-white">Button</Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
export {};

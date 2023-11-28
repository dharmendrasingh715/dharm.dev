import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import type { FC } from "react";

const Home: FC = () => {
  return (
    <div className="app font-roboto text-gray-600">
      <div className="min-h-screen">
        <Head>
          <title>Dharmendra Singh Home Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container mx-auto min-h-screen grid grid-cols-8">
          <Header />
          <main className="bg-gray-100 col-span-6 px-16 py-6">
            <div className="">
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nobis possimus repudiandae eligendi obcaecati a non deserunt excepturi. Consectetur esse aut veniam a, cumque provident corrupti, deserunt excepturi rem modi quas nesciunt ut consequuntur quo eius illum soluta. Cumque officia aliquid hic eum iure veritatis saepe, repellendus soluta! Unde, minima explicabo beatae rem perferendis consequuntur tempore hic cum est inventore iure, doloribus debitis iste facere molestiae placeat et sapiente. Vero repellendus sint necessitatibus? Tempora, voluptate amet necessitatibus quis, quaerat alias accusamus commodi dignissimos veritatis nihil totam, ipsam incidunt laboriosam! Nisi quia facere quod asperiores ipsa pariatur sapiente aut eos quibusdam?
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
export {};

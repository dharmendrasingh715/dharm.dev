import "@styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import type { FC } from "react";

const Application: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default Application;

import React from "react";
import App from "next/app";
import Head from "next/head";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/nextjs-argon-dashboard.scss";

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`

=========================================================
* * NextJS Argon Dashboard v1.1.0 (Template)
=========================================================

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-argon-dashboard/blob/master/LICENSE.md)

* Template by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
    document.appendChild(comment);
  }

  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Ritta</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}

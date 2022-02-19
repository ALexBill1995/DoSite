import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap&subset=latin-ext"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Alegreya:wght@500;700&family=Open+Sans:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link href="/css/bootstrap.css" rel="stylesheet" />
          <link href="/css/fontawesome-all.css" rel="stylesheet" />
          <link href="/css/swiper.css" rel="stylesheet" />
          <link href="/css/magnific-popup.css" rel="stylesheet" />
          <link href="/css/styles.css" rel="stylesheet" />
          <link href="/css/home.css" rel="stylesheet" />
          <link href="/css/footer.css" rel="stylesheet" />

          <link rel="icon" href="/images/favicon.png" />
        </Head>
        <body data-spy="scroll" data-target=".fixed-top">
          <Main />
          <NextScript />
          <script src="/js/jquery.min.js" />
          <script src="/js/popper.min.js" />
          <script src="/js/bootstrap.min.js" />
          <script src="/js/jquery.easing.min.js" />
          <script src="/js/swiper.min.js" />
          <script src="/js/jquery.magnific-popup.js" />
          <script src="/js/scripts.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <meta name="msapplication-TileColor" content="#0070f3" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Cine Seek" />
        <meta name="apple-mobile-web-app-title" content="CineSeek" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="310x310" href="/icons/ms-icon-310x310.png" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" sizes="152x152" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#0070f3" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

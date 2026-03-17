import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#08111f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Cine Seek" />
        <meta name="apple-mobile-web-app-title" content="CineSeek" />
        <meta
          name="description"
          content="Discover and filter movies with a polished PWA movie browsing experience."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon-cineseek.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="310x310" href="/icons/ms-icon-310x310.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

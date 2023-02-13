import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Porcinos FC, equipo de futbol twitch Kingsleague, informacion general"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={'true'}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-pink-500 container mx-auto">
        <NextScript />
        <Main />
      </body>
    </Html>
  );
}

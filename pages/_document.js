import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/porcinos.svg" />
        <meta
          name="description"
          content="Porcinos FC dueño Ibai Llanos, equipo de futbol twitch Kingsleague"
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
      <body className="linear">
        <NextScript />
        <Main />
      </body>
    </Html>
  );
}

import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import President from '../pages/president';

export default function Layout({ children, title = '', description = '' }) {
  return (
    <>
      <Head>
        <title>{`PorcinosFC - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      {children}
    </>
  );
}

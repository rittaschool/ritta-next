import type { AppProps } from 'next/app';
import 'react-grid-layout/css/styles.css'; // Needed for react-grid-layout to work
import 'react-resizable/css/styles.css'; // Needed for react-grid-layout to work
import Header from '../components/Header';
import '../styles/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

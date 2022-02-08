import type { AppProps } from 'next/app';
import 'react-grid-layout/css/styles.css'; // Needed for react-grid-layout to work
import 'react-resizable/css/styles.css'; // Needed for react-grid-layout to work
import '../styles/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

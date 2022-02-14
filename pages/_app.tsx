import type { AppProps } from 'next/app';
import 'react-grid-layout/css/styles.css'; // Needed for react-grid-layout to work
import 'react-resizable/css/styles.css'; // Needed for react-grid-layout to work
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import Header from '../components/Header';
import '../styles/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

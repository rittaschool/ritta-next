import type { AppProps } from 'next/app';
import { AppShell, MantineProvider } from '@mantine/core';

// CSS
import 'react-grid-layout/css/styles.css'; // Needed for react-grid-layout to work
import 'react-resizable/css/styles.css'; // Needed for react-grid-layout to work

// Custom Components
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'dark',
      }}
    >
      <AppShell navbarOffsetBreakpoint="sm" header={<Header />}>
        <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  );
}

export default MyApp;

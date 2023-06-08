import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { server } from '@/mocks/server';
import theme from '@/styles/theme';
import GlobalHead from '@/components/common/GlobalHead';
import Layout from '@/components/common/Layout';
import { CookiesProvider } from 'react-cookie';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydratedState}>
          <ThemeProvider theme={theme}>
            <GlobalHead />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </CookiesProvider>
  );
}

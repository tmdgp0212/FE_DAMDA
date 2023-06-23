import * as S from './style';
import Footer from '../Footer';
import Header from '../Header';
import { RefObject, createContext, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useRouter } from 'next/router';
import useRouteStore from '@/store/routeHistory';

export interface Context {
  ref: RefObject<HTMLDivElement>;
  isInView: boolean;
}

export const HeaderContext = createContext<Context | null>(null);

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { setHistory } = useRouteStore();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setHistory(router.pathname);
  }, [router]);

  return (
    <S.Main>
      <HeaderContext.Provider value={{ ref, isInView }}>
        <Header />
        <div>{children}</div>
      </HeaderContext.Provider>
      <Footer />
    </S.Main>
  );
}

export default Layout;

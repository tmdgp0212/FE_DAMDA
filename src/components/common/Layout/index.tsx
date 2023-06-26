import * as S from './style';
import Footer from '../Footer';
import Header from '../Header';
import { RefObject, createContext, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useRouter } from 'next/router';
import useRouteStore from '@/store/routeHistory';
import SideFloating from '../SideFloating';
import FabButton from '../FAB';

export interface Context {
  ref: RefObject<HTMLDivElement>;
  isInView: boolean;
}

export const HeaderContext = createContext<Context | null>(null);

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { setHistory } = useRouteStore();
  const ref = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const pathname = router.pathname;

  useEffect(() => {
    setHistory(router.pathname);
  }, [router]);

  return (
    <S.Layout>
      <S.Side>
        <SideFloating />
      </S.Side>
      <S.Main>
        <HeaderContext.Provider value={{ ref, isInView }}>
          <Header />
          <div ref={mainContainerRef}>{children}</div>
        </HeaderContext.Provider>
        <Footer />
        {pathname !== '/manager/accept' && pathname !== '/manager/completed' && pathname !== '/completed-user' && (
          <FabButton mainContainerRef={mainContainerRef} />
        )}
      </S.Main>
    </S.Layout>
  );
}

export default Layout;

import * as S from './style';
import Footer from '../Footer';
import Header from '../Header';
import { RefObject, createContext, useRef } from 'react';
import { useInView } from 'framer-motion';

export interface Context {
  ref: RefObject<HTMLDivElement>;
  isInView: boolean;
}

export const HeaderContext = createContext<Context | null>(null);

function Layout({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  console.log(ref);
  console.log(isInView);

  return (
    <S.Layout>
      <HeaderContext.Provider value={{ ref, isInView }}>
        <Header />
        <div>{children}</div>
      </HeaderContext.Provider>
      <Footer />
    </S.Layout>
  );
}

export default Layout;

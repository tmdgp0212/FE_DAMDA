import * as S from './style';
import Footer from '../Footer';
import Header from '../Header';
import { createContext, useState } from 'react';

interface ContextType {
  disabledScroll: boolean;
  setDisabledScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LayoutContext = createContext<ContextType | undefined>(undefined);

function Layout({ children }: { children: React.ReactNode }) {
  const [disabledScroll, setDisabledScroll] = useState(false);

  return (
    <LayoutContext.Provider value={{ disabledScroll, setDisabledScroll }}>
      <S.Layout disabledScroll={disabledScroll}>
        <Header />
        <div>{children}</div>
        <Footer />
      </S.Layout>
    </LayoutContext.Provider>
  );
}

export default Layout;

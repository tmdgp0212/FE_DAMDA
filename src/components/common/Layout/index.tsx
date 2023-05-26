import * as S from './style';
import Footer from '../Footer';
import Header from '../Header';

function Layout({ children, hasHeader }: { children: React.ReactNode; hasHeader?: boolean }) {
  return (
    <S.Layout>
      <Header />
      <div>{children}</div>
      <Footer />
    </S.Layout>
  );
}

export default Layout;

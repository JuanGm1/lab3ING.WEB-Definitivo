import { Footer } from '@components/footer';
import { Header } from '@components/header';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => (
  <div className='flex flex-col h-screen'>
    <Header />
    <main className='flex h-full w-full'>{children}</main>
    <Footer />
  </div>
);

export default Layout;

import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { ThemeProvider } from '@/components/theme-provider/theme-provider';

export const Layout = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="container mx-auto flex-grow px-4 py-8">
          <Outlet />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

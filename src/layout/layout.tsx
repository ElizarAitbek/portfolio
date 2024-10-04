import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="bg-black py-4 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <p className="text-center text-3xl">Elizar Aitbek</p>
        </div>
      </header>

      <main className="container mx-auto flex-grow px-4 py-8">
        <Outlet />
      </main>

      <footer className="mt-auto bg-gray-800 py-4 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© Portfolio type shi</p>
        </div>
      </footer>
    </div>
  );
};

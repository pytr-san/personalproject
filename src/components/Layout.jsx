import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <Outlet /> {/* This renders the child routes */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
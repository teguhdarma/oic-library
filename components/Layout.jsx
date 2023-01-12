import { motion } from 'framer-motion';
import React from 'react';
import Footer from './Footer';
import { Header } from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

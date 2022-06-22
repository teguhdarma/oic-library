import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="main-container">{children}</main>
      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

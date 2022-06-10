import React from 'react';

import Footer from './Footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

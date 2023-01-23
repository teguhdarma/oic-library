import React from 'react';
import Example from './Banner';
import { Footer } from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <div className=" sticky top-0 z-30">
        <Example />
      </div>
      <main>{children}</main>
      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

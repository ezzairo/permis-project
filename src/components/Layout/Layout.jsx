import React from 'react';
import Navbar from '../Navbar/Navbar'; // هاد المسار صحيح بناءً على image_1d0e42.png
import Footer from '../Footer/Footer'; // هاد المسار صحيح

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
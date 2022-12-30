import React from 'react';
import { Outlet } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      {/* <Navbar /> */}
      <div className="layout-container">{children ?? <Outlet />}</div>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;

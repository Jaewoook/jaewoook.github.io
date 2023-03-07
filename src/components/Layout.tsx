/**
 * External modules
 */
import React from "react";

/**
 * Internal modules
 */
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 md:container md:mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

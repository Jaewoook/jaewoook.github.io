/**
 * External modules
 */
import React from "react";

/**
 * Internal modules
 */
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
    children: React.ReactNode;
}

const Layout = (props: Props) => {
    const { children } = props;
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;

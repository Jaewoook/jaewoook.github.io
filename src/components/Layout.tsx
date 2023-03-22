/**
 * External modules
 */
import React from "react";
import styled from "styled-components";

/**
 * Internal modules
 */
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Progress } from "./Progress";

const Wrapper = styled.div`
  min-height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
`;

const Layout = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <Wrapper className="flex flex-col bg-neutral-50">
      <Header />
      <main className="flex-1 md:container md:mx-auto">{children}</main>
      <Footer />
      <Progress />
    </Wrapper>
  );
};

export default Layout;

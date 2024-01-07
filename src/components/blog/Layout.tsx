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
import { Progress } from "../common/Progress";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media only screen and (max-device-width: 640px) {
    min-height: clac(var(--vh, 1vh) * 100);
  }
`;

const Layout = (props: React.PropsWithChildren) => {
  const { children } = props;

  return (
    <Wrapper className="flex flex-col bg-neutral-50 dark:bg-neutral-900 transition-colors">
      <Header />
      <main className="flex-1 container mx-auto">{children}</main>
      <Footer />
      <Progress />
    </Wrapper>
  );
};

export default Layout;

/**
 * External modules
 */
import isPropValid from "@emotion/is-prop-valid";
import React, { useCallback } from "react";
import styled, { StyleSheetManager } from "styled-components";

/**
 * Internal modules
 */
import { Progress } from "@/components/common/Progress";
import { Footer } from "./Footer";
import { Header } from "./Header";

/**
 * Type modules
 */
import type { ShouldForwardProp } from "styled-components";

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

  const shouldForwardProp = useCallback<ShouldForwardProp<"web">>((propName, target) => {
    if (typeof target === "string") {
      return isPropValid(propName);
    }

    return true;
  }, []);

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Wrapper className="flex flex-col bg-neutral-100 transition-colors dark:bg-neutral-900">
        <Header />
        <main className="container mx-auto flex-1">{children}</main>
        <Footer />
        <Progress />
      </Wrapper>
    </StyleSheetManager>
  );
};

export default Layout;

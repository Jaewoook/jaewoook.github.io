import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

import { Icon } from '@types';

const Logo: Icon = ({ fill = "black" }) => {
  return (
    <LogoContainer>
        <LogoText className="Logo__Desktop" color={fill}>Jaewook Ahn</LogoText>
        <LogoText className="Logo__Mobile" color={fill}>Jaewook</LogoText>
    </LogoContainer>
  );
};

export default Logo;

const LogoText = styled.span<{ color: string; }>`
    color: ${({ color }) => color};
    font-weight: bold;
    font-size: 24px;
`;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }

    .Logo__Mobile{
      display: block;
    }
  `}
`;

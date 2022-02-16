import React from "react";
import styled from "styled-components";
import logo from "../../images/hero.svg";

const ActualLogo = styled.img`
  height: ${({ size }) => (size ? `${size}px` : "180px")};
`;

function Logo({ size }) {
  return <ActualLogo size={size} src={logo} />;
}

export default Logo;

import React from "react";
import styled from "styled-components";

const ActualLogo = styled.img`
  height: ${({ size }) => (size ? `${size}px` : "80px")};
`;

function Logo({ size }) {
  return <ActualLogo size={size} src="https://i.ibb.co/SXsqyq3/Logo.png" />;
}

export default Logo;

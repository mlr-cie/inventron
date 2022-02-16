import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #01bf71;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  box-shadow: 20px 20px 60px #b8c6db, -20px -20px 60px #f5f7fa;
  font-weight: 500;

  &:hover {
    transition: all 0.2s ease-in-out;
    // background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;

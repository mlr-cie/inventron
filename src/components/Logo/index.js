import React from "react";
import styled from "styled-components";

const ActualLogo = styled.img`
    height: ${({size}) => (size ? `${size}px` : "100px")};
`

const Logo = ({size}) => {
    return (
        <ActualLogo size={size} src={require("../../images/Logo.png").default}/>
    )
}

export default Logo;
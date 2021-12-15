import styled from "styled-components"
import {Link} from "react-router-dom";

export const FooterContainer = styled.footer`
     background-image: linear-gradient(to right, #b8c6db 0%, #f5f7fa 74%);
`

export const FooterWrap = styled.div`
    padding:  24px 24px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    
    border-radius: 20px 20px 0 0;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #000;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 18px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: #000;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    
    &:hover {
        color: #01bf71;
        transition: 0.3s ease-in-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 48px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #000;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin: 8px;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #000;
    margin-bottom: 40px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #000;
    font-size: 24px;
`
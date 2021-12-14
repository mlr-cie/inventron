import styled from "styled-components";



export const Container = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #b8c6db;
    background-image: linear-gradient(to right, #b8c6db 0%, #f5f7fa 74%);
    .Problemstatement_cards{
        height:300px
    }
    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const Wrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    /* width: 85vw; */
    gap: 25px;
    /* padding: 8px; */

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const Container2 = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #b8c6db;
    background-image: linear-gradient(to right, #b8c6db 0%, #f5f7fa 74%);
    
    @media screen and (max-width: 768px) {
        height: 50px;
    }

    @media screen and (max-width: 480px) {
        height: 70px;
    }
`
export const ProblemStatements = styled.div`
    height: 2000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #b8c6db;
    background-image: linear-gradient(to right, #b8c6db 0%, #f5f7fa 74%);
    
    @media screen and (max-width: 768px) {
        height: 50px;
    }

    @media screen and (max-width: 480px) {
        height: 2300px;
    }
`

export const HeadingH1 = styled.h1`
    font-size: 2.5rem;
    color: #00000;   
    margin-bottom: 64px;


    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
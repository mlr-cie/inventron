import React from 'react';
import { Container, Wrapper, HeadingH1, Container2 } from "../Commons";
import Problemstatement_cards from './Problemstatement_cards';

const ProblemStatements = () => {
    return (
        <> 
        <Container2 className = "Problemstatement_cards">
         <HeadingH1 >Problem Statements</HeadingH1>
         </Container2>
        <Problemstatement_cards/>
        </>
    )
}

export default ProblemStatements;

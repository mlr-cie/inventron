import React from 'react';
import { Container, Wrapper, HeadingH1, Container2 , ProblemStatements} from "../Commons";
import Problemstatement_cards from './Problemstatement_cards';

const Problemstatements = () => {
    return (
        <> 
        <Container2 className = "Problemstatement_cards">
         <HeadingH1 >Problem Statements</HeadingH1>
         </Container2>
        <Problemstatement_cards/>
        </>
    )
}

export default Problemstatements;

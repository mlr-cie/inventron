import React from 'react';
import { Container, HeadingH1, Wrapper } from "../Commons"
import SimpleAccordion from './SimpleAccordion';
const FAQs = () => {
    return (
        <>
            <Container id="faqs">
                <HeadingH1>FAQs</HeadingH1>
                <Wrapper />
                <SimpleAccordion/>
            </Container>
        </>
    )
}

export default FAQs;

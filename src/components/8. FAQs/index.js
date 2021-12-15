import React from 'react';
import { Container, HeadingH1, Wrapper , Faq} from "../Commons"
import SimpleAccordion from './SimpleAccordion';
const FAQs = () => {
    return (
        <>
            <Faq>
                <HeadingH1>FAQs</HeadingH1>
                <Wrapper />
                <SimpleAccordion/>
            </Faq>
        </>
    )
}

export default FAQs;

import React from 'react'
import styled from 'styled-components'

const DetailsStyles = styled.div`
    padding: 5% 20%;
`

const DetailsHeaderStyle = styled.h1`
    color: #735D71;
    font-size: 3rem;
    margin: 0;
    padding-bottom: 2%;
`

const DateStyles = styled.p`
    font-weight: bold;
    font-size: 1.2rem;
    padding-bottom: 2%;
    margin: 0;
`

const ExplanationStyles = styled.p`
    line-height: 2rem;
    color: #8F8B95;
    margin: 0;
`

const FooterStyles = styled.footer`
    color: #F3F3F3;
    font-size: 1.5rem;
    background-color: #2C3D55;
    padding: 1% 2%;
`

const Details = (props) => {
    return (
        <>
            <DetailsStyles>
                <h2>Photo of the Day:</h2>
                <DetailsHeaderStyle>{props.data.title}</DetailsHeaderStyle>
                <DateStyles>{props.data.date}</DateStyles>
                <ExplanationStyles>{props.data.explanation}</ExplanationStyles>
            </DetailsStyles>

            <FooterStyles className="Footer">
                <p>Copyright © {props.data.copyright}</p>
            </FooterStyles>
        </>
    )
}

export default Details

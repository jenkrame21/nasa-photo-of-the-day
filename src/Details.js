import React from 'react'
import styled from 'styled-components'

// Styled Components

const DetailsStyles = styled.div`
    padding: 3% 20%;
`

const DetailsHeaderStyle = styled.h1`
    color: #735D71;
    font-size: 3rem;
    margin: 0;
    margin-bottom: 5%;
    letter-spacing: 10px;
`

const DateStyles = styled.p`
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 5%;
    letter-spacing: 5px;
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
    letter-spacing: 10px;
`

// Details Function

const Details = (props) => {
    return (
        <>
            <DetailsStyles>
                <h2>Photo of the Day:</h2>
                <DetailsHeaderStyle>{props.data.title}</DetailsHeaderStyle>
                <DateStyles>Today's Date: <br/>{props.data.date}</DateStyles>
                <ExplanationStyles>{props.data.explanation}</ExplanationStyles>
            </DetailsStyles>

            <FooterStyles className="Footer">
                <p>Copyright © NASA</p>
            </FooterStyles>
        </>
    )
}

export default Details

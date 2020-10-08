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
                <DetailsHeaderStyle>{props.data.title}</DetailsHeaderStyle>
                <p>{props.data.date}</p>
                <p>{props.data.explanation}</p>
            </DetailsStyles>

            <FooterStyles className="Footer">
                <p>Copyright © {props.data.copyright}</p>
            </FooterStyles>
        </>
    )
}

export default Details

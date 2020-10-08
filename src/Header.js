import React, {useState, useEffect} from 'react'
import styled, { keyframes } from 'styled-components'

const keyFrames = keyframes`
    100% {
        opacity: 1;
    }
`

const HeaderStyles = styled.header`
    text-decoration: none;
    background-color: ${pr => pr.bcolor ? pr.theme.backgroundColor : null};
    opacity: 0;
    animation: ${keyFrames} 0.5s ease-in-out forwards;
    display: flex;
    justify-content: space-evenly;
    padding: 2%;
`

const HeaderLinkStyles = styled.a`
    color: ${pr => pr.color ? pr.theme.primaryColor : null};
`

const Header = () => {
    return (
        <>
            <HeaderStyles >
                <HeaderLinkStyles href='#'>Home</HeaderLinkStyles>
                <HeaderLinkStyles href='#'>News</HeaderLinkStyles>
                <HeaderLinkStyles href='#'>About</HeaderLinkStyles>
                <HeaderLinkStyles href='#'>Downloads</HeaderLinkStyles>
            </HeaderStyles>
        </>
    )
}

export default Header


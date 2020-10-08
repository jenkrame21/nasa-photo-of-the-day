import React, {useState, useEffect} from 'react'
import styled, { keyframes } from 'styled-components'

const keyFrames = keyframes`
    100% {
        opacity: 1;
    }
`

const HeaderLinkStyles = styled.div`
    color: ${pr => pr.color ? pr.theme.primaryColor : null};
    background-color: #14213d;
    opacity: 0;
    animation: ${keyFrames} 0.5s ease-in-out forwards;
    display: flex;
    justify-content: space-evenly;
    padding: 2%;
`

const Header = (props) => {
    return (
        <>
            <HeaderLinkStyles>
                <a href='#'>Home</a>
                <a href='#'>News</a>
                <a href='#'>About</a>
                <a href='#'>Downloads</a>
            </HeaderLinkStyles>
        </>
    )
}

export default Header


import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.header{
    
}

const Header = (props) => {
    return (
        <>
            <header>
                <h2>
                    Home
                </h2>
                <h2>
                    News
                </h2>
                <h2>
                    About
                </h2>
                <h2>
                    Downloads
                </h2>
            </header>
        </>
    )
}

export default Header


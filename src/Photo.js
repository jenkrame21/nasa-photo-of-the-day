import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const ImageStyles = styled.img`
    width: 100%;
`

const Photo = (props) => {
    return (
        <div>
            <ImageStyles src={props.data.url} alt={props.data.title}></ImageStyles>
        </div>
    )
}

export default Photo


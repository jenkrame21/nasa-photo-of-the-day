import React from 'react';
import styled from 'styled-components';

const ImageStyles = styled.img`
    width: 50%;
    margin: 3%;
`

const Photo = (props) => {
    return (
        <div className="img-div">
            <ImageStyles src={props.data.url} alt={props.data.title}></ImageStyles>
        </div>
    )
};

export default Photo;


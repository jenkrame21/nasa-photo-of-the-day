import React, {useState, useEffect} from 'react'

const Photo = (props) => {
    return (
        <div>
            <img src={props.data.url} alt={props.data.title}></img>
        </div>
    )
}

export default Photo


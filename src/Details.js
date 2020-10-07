import React from 'react'

const Details = (props) => {
    return (
        <>
            <div>
                <h1>{props.data.title}</h1>
                <p>{props.data.explanation}</p>
            </div>

            <div className="Footer">
                <p>Copyright: {props.data.copyright}</p>
            </div>
        </>
    )
}

export default Details

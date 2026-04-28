import React from 'react';

function ShowData(props){
    return(
        <>
        <h1>{props.data.name}</h1>
        <h1>{props.data.age}</h1>
        <button>Hello</button>
        </>
    )
}

export default ShowData;
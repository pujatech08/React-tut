import React,{ useState } from 'react';

function InputBox() {
    const [data, setData] = useState(0);
    function getData(val){
        console.warn(val.target.value);
        setData(val.target.value);
    }
    return(
        <>
        <p>{
            data ? data : "No data available"
        }</p>
        <input type="text" onChange={getData} /><br/>
        
        </>
    )
}

export default InputBox;
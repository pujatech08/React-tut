import React from "react";
import './style.css';
import style from './custom_modules.css';
// Style types in React - Inline, Internal and External
// 1. Inline Style
// 2. Internal Style
// 3. External Style

function StyleReact(){
    return(
        <>
        <h1 className="primary">Style Type 1 in React Js</h1>
        <h1 style={{color:'red', backgroundColor:"black"}}>Style Type 2 in React Js</h1>
        <h1 className="success">Style Type 3 in React Js</h1>
         </>
    )

}

export default StyleReact;
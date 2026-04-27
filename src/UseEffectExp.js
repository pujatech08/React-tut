import React,{useEffect,useState} from "react";

function UseEffectExp(){
     const [count, setCount] = useState(0);

     useEffect(()=>{
        console.warn("Use Effect Called");
     })

     return(
        <>
        <h4>Use Effect Example {count}</h4>
        <button onClick={() => setCount(count+1)}>Update Count</button>
        </>
     )
}

export default UseEffectExp;
import React,{useEffect,useState} from "react";
function UserUseEffectProp(props){
    useEffect(()=>{
        alert("Count Updated"+props.count);
    },[props.count]);

    return(
        <>
        <h4>Use Effect Function Example {props.count}</h4>
        <h4>Use Effect Function Example {props.data}</h4>
        </>
    )
}

export default UserUseEffectProp;
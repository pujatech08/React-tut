import React from "react";
import ShowData from "./ShowData";
import User from './User';
function ReuseComp(){
   const user = [
        {id:1,name:"Ram",age:26},
        {id:2,name:"Shyam",age:24},
        {id:3,name:"Hari",age:28}   
    ]
    return(
        <>
        <h1>Reuse Component with list</h1>
        <User />
        {
            user.map((item,i)=>{
                return <ShowData data={item} />
            })
        }
        </>
    )
}

export default ReuseComp;
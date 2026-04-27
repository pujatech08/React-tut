import React,{useState, useEffect} from "react";
import UserUseEffectProp from "./UserUseEffectProp";

function UseEffectFunc(){
        const [data, setData] = useState(10);
        const [count, setCount] = useState(100);
        return(
            <>
            <UserUseEffectProp count={count} data={data} />
            <button onClick={()=> setCount(count+1)}>Update Count</button>
            <button onClick={()=> setData(data+1)}>Update Data</button>
            </>
        )
}

export default UseEffectFunc;
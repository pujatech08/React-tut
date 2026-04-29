import React,{useMemo} from "react";

function UseMemoExp(){
    const [count, setCount] = React.useState(0);
    const [item, setItem] = React.useState(10);
    const multiCount = useMemo(() => {
        return count*5; 
    }, [count])
    
    return(
        <>
         <h1>UseMemo Hook in React</h1>
         <p>Count: {count}</p>
         <p>Item: {item}</p>
         <p>Multi Count: {multiCount}</p>
         <button onClick={()=> setCount(count+1)}>Update Count</button>
         <button onClick={()=> setItem(item*10)}>Update Item</button>
        </>

    )
}

export default UseMemoExp;
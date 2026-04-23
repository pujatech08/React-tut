import React, {useState} from 'react';

function PropFunction(props) {
    const [name, setName] = useState("Shyam");
     function updateName(){
        setName("Hari");
     }
    return(
        <>
         <p>Name : {name}</p>
         <p>Age : {props.age}</p>
         <button onClick={updateName}>Update Name</button>
        </>
    )
}

export default PropFunction;
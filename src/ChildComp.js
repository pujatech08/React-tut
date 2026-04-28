import React from "react";

function ChildComp(props) {
    let name = "Puja";
    return(
        <>
        <h2>Child Component</h2>
        <button onClick={() => props.alert(name)}>Alter Data</button>
        </>
    )
}

export default ChildComp;
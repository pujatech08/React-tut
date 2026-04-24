import React from "react";

class Constructor extends React.Component {
    // The constructor is a special method in a class that is called when an instance of the class is created. It is used to initialize the state and bind methods to the class instance.
    // Api doesnot called in constructor, it is used to set the initial state of the component and bind methods to the class instance.
    constructor(){
        super();
        console.log("Constructor called");
    }
    render(){
        return(
            <>
            <h1>Constructor Example</h1>
            </>
        )
    }
}

export default Constructor;
import React from "react";
// ComponentDidMount is a lifecycle method in React that is called after a component is mounted (inserted into the DOM). It is commonly used for performing side effects, such as fetching data from an API, setting up subscriptions, or manipulating the DOM. The componentDidMount method is only called once during the lifecycle of a component, making it an ideal place to initialize data or perform any setup that requires access to the DOM.
// Here's an example of how to use componentDidMount in a class component:
// In this example, we have a class component called ComponentDidMount. In the constructor, we initialize the state with a name property. The componentDidMount method is called after the component is mounted, and it logs a message to the console. The render method displays the name from the state and includes a button that updates the name when clicked.
class ComponentDidMount extends React.Component{
    constructor(){
        super();
        console.log("Constructor called");
        this.state = {
            name:"Ram"
        }
    }

    componentDidMount(){
        console.log("Component Did Mount called");
    }
    render(){
        console.log("Render method called");
        return(
            <>
            <h3>Component Did Mount Example</h3>
            <p>Name:{this.state.name}</p>
            <button onClick={()=>this.setState({name:"Radha"})}>Update Name</button>
            </>
        )
    }
}

export default ComponentDidMount;
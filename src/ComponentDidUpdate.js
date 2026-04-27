import React from 'react';
import { Component } from 'react';

// ComponentDidUpdate is a lifecycle method in React that is called after a component has been updated. It is invoked immediately after the component's updates are flushed to the DOM. This method can be used to perform side effects or to compare the previous props and state with the current ones.
// The componentDidUpdate method receives three parameters: preProps (the previous props), preState (the previous state), and snapshot (a value returned by getSnapshotBeforeUpdate, if implemented). You can use these parameters to determine if certain conditions are met and to perform actions accordingly.
// In the example below, we have a component that displays a name and a button to update the name. When the button is clicked, the state is updated, which triggers the componentDidUpdate method. The method logs the previous props, previous state, and snapshot to the console.
class ComponentDidUpdate extends Component{
    constructor(){
        console.warn("Constructor");
        super();
        this.state ={
            name:"Krishna"
        }
        
    }

    componentDidUpdate(preProps,preState,snapshot){
        console.warn("Component Did Update");
        console.warn("Previous Props:", preProps);
        console.warn("Previous State:", preState);
        console.warn("Snapshot:", snapshot);
    }

    render(){
        console.warn("Render method");
        return(
            <>
            <h3>Component Did Update Example</h3>
            <p>Name:{this.state.name}</p>
            <button onClick={()=>{this.setState({name:"Gopala"})}}>Update Name</button>
            </>
        )
    }
}

export default ComponentDidUpdate;
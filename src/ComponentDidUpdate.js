import React from 'react';
import { Component } from 'react';

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
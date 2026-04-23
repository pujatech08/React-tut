import React, {Component} from "react";

class PropClass extends Component{
    constructor(){
        super();
        this.state = {
            name : "Ram"
        }
    }
    render(){
        return(
            <>
             <h3>Name : {this.props.name}</h3>
             <button onClick={this.setState({name:"Radhe"})}>Update Name</button>
            </>
        )
    }
}

export default PropClass;
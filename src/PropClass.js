import React, {Component} from "react";

class PropClass extends Component{
    constructor(){
        super();
        this.state = {
            name : "Ram"
        }
    }

    updateName = () => {
        this.setState({name : "Krishna"});
    }
    render(){
        return(
            <>
             <h3>Name : {this.props.name}</h3>
             <button onClick={this.updateName}>Update Name</button>
            </>
        )
    }
}

export default PropClass;
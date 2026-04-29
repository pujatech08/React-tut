import React from "react";

class PureComponentExp extends React.PureComponent{
    constructor(){
        super();
        this.state={
            count:1
        }
    }

    render(){
        console.warn("Pure Component Rendered");
        return(
            <>
            <h1>Pure Component {this.state.count}</h1>
            <button onClick={()=>this.setState({ count: this.state.count + 1 })}>Update Count</button>
            </>
        )
    }
}

export default PureComponentExp;
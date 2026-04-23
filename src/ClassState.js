import react from "react";


class ClassState extends react.Component{
    // Super() is used to call the constructor of the parent class. It is necessary to call super() before using this in the constructor of a subclass.
    constructor(){
        super();
        this.state= {
            name:"John Doe"
        }
    }
    // In class components, we use this.setState() to update the state. It takes an object as an argument and updates the state with the new values.
    // function key is the name of the state variable and the value is the new value that we want to set for that variable.
    updateData(){
        this.setState({name:"Petter Doe"});
    }
    render(){
        return(
            <>
             <h3>Class States</h3>
             <h5>{this.state.name}</h5>
             <button onClick={() => this.updateData()}>Update Name</button>
            </>
        )
    }
}

export default ClassState;
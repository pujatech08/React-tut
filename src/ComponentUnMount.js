import React,{Component} from 'react';

// ComponentWillUnmount is a lifecycle method in React that is called just before a component is unmounted and destroyed. It is used to perform any necessary cleanup, such as canceling timers, removing event listeners, or cleaning up any resources that were created in the component.
// In the example below, we have a component that displays a name and a button to unmount the component. When the button is clicked, the componentWillUnmount method is called, which logs a message to the console indicating that the component is being unmounted.
class ComponentUnMount extends Component{
    constructor(){
        super();
        this.state = {
            show:true
        }
    }
    componentWillUnmount(){
        console.warn("Component UnMount");
    }
     render(){
        return(
            <>
            <h1>Component UnMount</h1>
            {
                this.state.show ? <h3>Component is Mounted</h3> : null
            }
            <button onClick={()=> this.setState({show: !this.state.show})}>Toggle button</button>
            </>
        )
     }
}


export default ComponentUnMount;
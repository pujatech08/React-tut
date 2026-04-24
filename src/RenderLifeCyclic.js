import React from 'react';

// Rendering is the process of displaying the component on the screen. The render method is called every time the state or props of the component changes. The render method returns a React element, which is a description of what to render on the screen. The render method is a pure function, which means that it should not modify the state or props of the component. It should only return a React element based on the current state and props of the component.
class RenderLifeCyclic extends React.Component {
     render(){
        return(
            <>
            <h3>Render Life Cycle Example</h3>
            </>
        )
     }
}


export default RenderLifeCyclic;
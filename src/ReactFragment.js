import React from "react";

// React Fragment is a component that allows you to group multiple elements without adding an extra node to the DOM. It is useful when you want to return multiple elements from a component without wrapping them in a div or any other container.

function ReactFragment() {
    return (
        <React.Fragment>
            <h1>React Fragment Example</h1>
            <p>This is an example of React Fragment.</p>
        </React.Fragment>
    );
}

export default ReactFragment;
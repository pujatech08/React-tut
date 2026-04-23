 import React from 'react';
 
 function HideShow(){
    const [show, setShow] = React.useState(true);

    return(
        <>
         <h3>Hide Show Example</h3>
         {
            show ? <h3>Show Data</h3> : null
         }
         <button onClick={() => setShow(false)}>Hide</button>
         <button onClick={() => setShow(true)}>Show</button>
         <button onClick={() => setShow(!show)}>Toggle</button>
        </>
    )
}

export default HideShow;
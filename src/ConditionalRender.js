import React,{useState} from 'react';

function ConditionalRender(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
     return (
        <>
          <h3>Conditional Rendering</h3>
            <h5>Conditional Rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.</h5>
            {
                isLoggedIn ? <h3>Welcome User</h3> : <h3>Please Login</h3>
            }

            <button onClick={() => setIsLoggedIn(true)}>Login</button>
            
        </>
     )
}

export default ConditionalRender;
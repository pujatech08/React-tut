import React,{useState} from "react";

function BasicFormValidation() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [nameError, setNameError] = useState("");
    const [passError, setPassError] = useState("");
    function handleSubmit(e){
        e.preventDwefault();
        if(name < 5 || pass < 4){
            alert("Please fix the errors before submitting");
        } else {            
            alert("Form submitted successfully");
        }
    }
    
    function checkName(e){
        if(e.target.value.length < 5){
            setNameError("Username must be at least 5 characters long");
        } else {
            setNameError("");
            setName(e.target.value);
        }
        
    }
   
    function checkPassword(e){
        if(e.target.value.length < 4){
            setPassError("Password must be at least 4 characters long");
        } else {
            setPassError("");
            setPass(e.target.value);
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={checkName} />{nameError && <span style={{color:"red"}}>{nameError}</span>}<br/><br/>
            <input type="password" placeholder="Password" onChange={checkPassword} />{passError && <span style={{color:"red"}}>{passError}</span>}<br/><br/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default BasicFormValidation;
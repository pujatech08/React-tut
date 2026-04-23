import React,{ useState} from 'react';

function BasicForm() {
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [agree, setAgree] = useState(false);

    function getFormData(e){
        e.preventDefault();
         console.log("Name: ", name);
        console.log("Country: ", country);
        console.log("Agree: ", agree);
    }
    return(
        <>
         <h1>Basic Form Validation</h1>
         <form onSubmit={getFormData }>
            <input type="text" onChange={(e)=> setName(e.target.value)} placeholder="Enter Name" required /><br/><br/>
            <select onChange={(e)=> setCountry(e.target.value)}>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </select><br/><br/>
            <input type="checkbox" onChange={(e)=>setAgree(e.target.checked)}/> I agree to terms and conditions
            <br/><br/>
             <button type="submit">Submit</button>
         </form>
        </>
    )
}

export default BasicForm;
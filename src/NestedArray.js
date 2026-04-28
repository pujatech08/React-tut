import React from 'react';
import {Table} from "react-bootstrap";
function NestedArray(){
    const data = [
        {
            id: 1,
            name: "John",
            age: 20,
            address:{
                city: "New York",
                country: "USA"  
            }
        },
        {
            id: 2,  
            name: "Jane",
            age: 22,
            address:{ 
                city: "Los Angeles",
                country: "USA"  
            }  
        },
        {
            id: 3,  
            name: "Doe",
            age: 21,
            address:{
                city: "Chicago",
                country: "USA"  
            }  
        }   
    ];

    return(
        <>
          <h1>Nested Array Example</h1>
          <Table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th> 
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item)=>{
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            
                        </tr>
                    })
                }
            </tbody>
            </Table>
        </>
    )
}

export default NestedArray;
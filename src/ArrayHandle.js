import React from "react";
import {Table} from "react-bootstrap";
function ArrayHandle() {
  const students = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 22 },
    { id: 3, name: "Doe", age: 21 },
  ];
  return (
    <>
      <h1>List With BootStrap Table</h1>
      <Table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ArrayHandle;

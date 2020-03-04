import React from "react"; 


export default function EmployeeTable (props){
  return (
    <div>
      <div>
        <button onClick={props.handleButtonClick}>Sort By Name</button>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">key</th>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">role</th>
            <th scope="col">department</th>
          </tr>
        </thead>
        <tbody>
          {
            props.employees.map(row => (
              <tr>
                <th scope="row">1</th>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.role}</td>
                <td>{row.department}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
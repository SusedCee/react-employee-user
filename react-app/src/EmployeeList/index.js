import React from 'react';
import css from './style.css'

const Employees = (props) => {
  console.log(props, ' props in employeeList')

  const employeeList = props.employees.map((employee) => {
    return (
      <li key={employee._id}>
        <span>{employee.name}</span><br/>
        <span>{employee.position}</span><br/>
        <span>{employee.birthDate}</span><br/>
        <span>{employee.department}</span><br/>
        <span>{employee.annualSalary}</span><br/>
        <button onClick={props.deleteEmployee.bind(null, employee._id)}>Delete</button><br/>
        <button onClick={props.showModal.bind(null, employee)}>Edit</button>
      </li>
      )
  })

  return (
    <div>
      <h3>Employees</h3>
      <ul className="employees">
        {employeeList}
      </ul>
    </div>
    )
}



export default Employees;
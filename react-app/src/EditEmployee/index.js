import React, { Component } from 'react';
import {Form, Button, Label} from 'semantic-ui-react';

const EditEmployee = (props) => {

	return (
		<div>
			<h4> Edit Employee </h4>
			<Form onSubmit={props.closeAndEdit}>
				<Label>
					Edit Name:
					<Form.Input type="text" name="name" onChange={props.handleFormChange} value={props.employeeToEdit.name}/>
				</Label>
				<Label>
					Edit Position:
					<Form.Input type="text" name="position" onChange={props.handleFormChange} value={props.employeeToEdit.position}/>
				</Label>
				<Label>
					Edit Birthdate:
					<Form.Input type="date" name="birthDate" onChange={props.handleFormChange} value={props.employeeToEdit.birthDate}/>
				</Label>
				<Label>
					Edit Department:
					<Form.Input type="text" name="department" onChange={props.handleFormChange} value={props.employeeToEdit.department}/>
				</Label>
				<Label>
					Edit Annual Salary:
					<Form.Input type="text" name="annualSalary" onChange={props.handleFormChange} value={props.employeeToEdit.annualSalary}/>
				</Label>
				<Button type="submit">Edit</Button>
			</Form>
		</div>
	)
}

export default EditEmployee;


// class EditEmployee extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       name: props.title,
//       position: props.description,
//       birthDate: props.birthDate,
//       department: props.department,
//       salary: props.salary
//     }

//   }
//   updateEmployee = (e) => {
//     this.setState({[e.currentTarget.name] : e.currentTarget.value})
//   }
//   render(){
//     return (
//       <form onSubmit={this.props.addEmployee.bind(null, this.state)}>
//         <label htmlFor="name">Employee:
//           <input type="text" name="name" onChange={this.updateEmployee} value={this.state.name}/>
//         </label>
//         <label htmlFor="position">Position:
//           <input type="text" name="position" onChange={this.updateEmployee} value={this.state.position}/>
//         </label>
//         <label htmlFor="birthDate">Birthdate:
//           <input type="date" name="birthDate" onChange={this.updateEmployee} value={this.state.birthDate}/>
//         </label>
//         <label htmlFor="department">Department:
//           <input type="text" name="department" onChange={this.updateEmployee} value={this.state.department}/>
//         </label>
//         <label htmlFor="salary">Salary:
//           <input type="text" name="salary" onChange={this.updateEmployee} value={this.state.salary}/>
//         </label>
//         <button type='submit'>
//           Create Employee
//         </button>
//       </form>
//       )
//   }
// }











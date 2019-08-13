import React, { Component } from 'react';
import {Form, Button, Label} from 'semantic-ui-react';

class CreateEmployee extends Component {
	constructor(){
		super();

		this.state = {
			name: '',
			position: '', 
			birthDate: '', 
			department: '',
			annualSalary: '',
		}
	}

	updateEmployee = (e) => {
		this.setState({[e.currentTarget.name] : e.currentTarget.value})
	}
	render(){
		return (
			<div>
			<Form onSubmit={this.props.addEmployee.bind(null, this.state)}>
				<Label htmlFor="name">Employee Name:
					<Form.Input type="text" name="name" onChange={this.updateEmployee} value={this.state.name}/>
				</Label>
				<Label htmlFor="position">Position: 
					<Form.Input type="text" name="position" onChange={this.updateEmployee} value={this.state.position}/>
				</Label>
				<Label htmlFor="birthDate">Birthdate:
					<Form.Input type="date" name="birthDate" onChange={this.updateEmployee} value={this.state.birthDate}/>
				</Label>
				<Label htmlFor="department">Department:
					<Form.Input type="text" name="department" onChange={this.updateEmployee} value={this.state.department}/>
				</Label>
				<Label htmlFor="annualSalary"> Annual Salary:
					<Form.Input type="text" name="annualSalary" onChange={this.updateEmployee} value={this.state.annualSalary}/>
				</Label>
				<Button type="submit">
					Create Employee
				</Button>
			</Form>
			</div>
			)
	}
}

export default CreateEmployee;
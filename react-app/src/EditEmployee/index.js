import React, { Component } from 'react';
import {Form, Button, Label} from 'semantic-ui-react';

const EditEmployee = (props) => {

	return (
		<div>
			<h4> Edit Employee </h4>
			<Form onSubmit={props.closeAndEdit}>
				<Label>
					Edit Name:
					<Form.Input type="text" name="name" onChange={props.hanleFormChange} value={props.employeeToEdit.name}/>
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
				<Button type="Submit">Edit</Button>
			</Form>
		</div>
	)
}

export default EditEmployee;
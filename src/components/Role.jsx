import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import '../index.css'

import {connect} from 'react-redux'
import {updateRole} from '../actions/actions'

class Role extends Component {

	handleChange = event => {
		const value = event.target.value
		this.props.updateRole(this.props.selectedRole,value)
	}

	render() {
		if(!this.props.selectedRole) {
			return null
		} else {
			const {title,company,status,description,requirements} = this.props.selectedRole
			const req = requirements.toString().replace("[","").replace("]","")
			return (
				<Card>
					<Card.Body>
						<Card.Title>
							<h2>{title}</h2>
						</Card.Title>
						<Card.Subtitle>
							{company}
						</Card.Subtitle>
						<Card.Text>
							<small>{status}</small>
							<DropdownButton size="sm" id="dropdown-item-button" title={status}>
								<Dropdown.Item
									as="button"
									value="Interested"
									onClick={this.handleChange}>
									Interested
								</Dropdown.Item>
								<Dropdown.Item
									as="button"
									value="Applied"
									onClick={this.handleChange}>
									Applied
								</Dropdown.Item>
								<Dropdown.Item
									as="button"
									value="Interviewing"
									onClick={this.handleChange}>
									Interviewing
								</Dropdown.Item>
								<Dropdown.Item
									as="button"
									value="Successful"
									onClick={this.handleChange}>
									Successful
								</Dropdown.Item>
								<Dropdown.Item
									as="button"
									value="Rejected"
									onClick={this.handleChange}>
									Rejected
								</Dropdown.Item>
								<Dropdown.Item
									as="button"
									value="Not intereste"
									onClick={this.handleChange}>
									Not interested
								</Dropdown.Item>
							</DropdownButton>
							<br />
							{description}
							<br /><br />
							<strong>Requirements: </strong>{req}
						</Card.Text>
					</Card.Body>
				</Card>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		selectedRole: state.selectedRole,
		roles: state.roles
	}
}

export default connect(mapStateToProps,{updateRole})(Role);

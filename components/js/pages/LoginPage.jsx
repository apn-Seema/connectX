import React from 'react'
import {Link} from 'react-router'

export default class LoginPage extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="cell-4">
					<Link to='auth/'>LOGIN</Link>
				</div>
			</div>
		)
	}
}
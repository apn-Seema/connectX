import React from 'react'
import {Link} from 'react-router'

export default class NavSub extends React.Component {
	render() {
		return (
			<div>
				<div className="hold-sub">
					<div className='nav-sub'>
						<div className="nav-center">
							{this.props.route.childRoutes.map((link, i) => {
								return(
									<Link className='nav-button' activeClassName='selected' to={'/auth/' + this.props.route.path + '/' + link.path} key={i}>
										<div className='nav-name'>{link.name}</div>
									</Link>
								)
							})}
						</div>
					</div>
					<div className='wrapper'>{this.props.children}</div>
				</div>
			</div>
		)
	}
}
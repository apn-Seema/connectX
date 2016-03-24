import React from 'react'
import {Link} from 'react-router'

import Chat from './Chat'

export default class NavPrime extends React.Component {
	render() {
		return (
			<div>
				<div className="hold-prime">
					<div className='nav-prime'>
						<div className="nav-center">
							<img className="logo-connectx" src={base_url + '/src/img/connectX_logo.png'}/>
							<Link className='nav-button' activeClassName='selected' to='/auth/Dashboard'>
								<div className='nav-name'>Scott's Home Dashboard</div>
							</Link>
							<Link className='nav-button' activeClassName='selected' to='/auth/Contacts'>
								<div className="nav-name">Contact Manager</div>
							</Link>
							<Link className='nav-button' activeClassName='selected' to='/auth/SalesAndMarket'>
								<div className="nav-name">Sales & Mktg Manager</div>
							</Link>
							<Link className='nav-button' activeClassName='selected' to='/auth/DocumentManager'>
								<div className="nav-name">Document Manager</div>
							</Link>
							<Link className='nav-button' activeClassName='selected' to='/auth/Analytics'>
								<div className="nav-name">Analytics</div>
							</Link>
							<Link className='nav-button' activeClassName='selected' to='/auth/TimeManager'>
								<div className="nav-name">Time Manager</div>
							</Link>
							<Link className='nav-button' activeClassName='selected' to='/auth/psx'>
								<div className="nav-name">PSX</div>
							</Link>
							<Link className='nav-button' activeClassName='selected' to='/auth/setup'>
								<div className="nav-name">Setup</div>
							</Link>
						</div>
					</div>
					<div className='wrapper'>{this.props.children}</div>
				</div>
				<div className="chat-box"><Chat/></div>
			</div>
		)
	}
}
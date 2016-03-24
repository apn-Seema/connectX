import React from 'react'
import ReactDOM from 'react-dom'
import {Motion, spring, TransitionMotion} from 'react-motion'
import {createHistory, useBasename} from 'history'
import {Router, Route, IndexRoute, Link} from 'react-router'
import '../css/main.scss'

import LoginPage from './pages/LoginPage'
import NavPrime from './pages/NavPrime'
import NavSub from './pages/NavSub'

import Dashboard from './pages/auth/Dashboard'

import FindContact from './pages/auth/contact_manager/FindContact'
import SearchContacts from './pages/auth/contact_manager/SearchContacts'

import Email from './pages/auth/sales_manager/Email'
import GroupText from './pages/auth/sales_manager/GroupText'

import Admin from './pages/auth/document_manager/Admin'

import GeoMap from './pages/auth/analytics/GeoMap'

import AppCalendar from './pages/auth/time_manager/AppCalendar'
import Soon from './pages/auth/Soon'


// Check if development environment and respond properly
let mainPath
let baseHistory
if(NODE_ENV === 'production') {
	if(base_url == '') {
		mainPath = '/'	
	} else {
		mainPath = '/connectX/public'
	}
	baseHistory = useBasename(createHistory)({
		basename: mainPath
	})
} else {
	baseHistory = ''
}

const routes = [
	{path: '/', component: LoginPage},
	{path: '/auth', component: NavPrime,
		indexRoute: {onEnter: (nextState, replace) => replace('/auth/Dashboard')},
		childRoutes: [
			{path: 'Dashboard', component: Dashboard},
			{path: 'Contacts', component: NavSub,
				indexRoute: {onEnter: (nextState, replace) => replace('/auth/contacts/FindContact')},
				childRoutes: [
					{path: 'FindContact', component: FindContact, name: 'Find Contact'},
					{path: 'SearchContacts', component: SearchContacts, name: 'Search Contacts'}
				]},
			{path: 'SalesAndMarket', component: NavSub,
				indexRoute: {onEnter: (nextState, replace) => replace('/auth/SalesAndMarket/Email')},
				childRoutes: [
					{path: 'Email', component: Email, name: 'Email'},
					{path: 'DirectMail', component: Soon, name: 'Direct Mail'},
					{path: 'Microsite', component: Soon, name: 'Microsite'},
					{path: 'GroupText', component: GroupText, name: 'Group SMS Text'}
				]},
			{path: 'DocumentManager', component: NavSub,
				indexRoute: {onEnter: (nextState, replace) => replace('/auth/DocumentManager/Admin')},
				childRoutes: [
					{path: 'Admin', component: Admin, name: 'Admin'},
					{path: 'Sales', component: Soon, name: 'Sales'},
					{path: 'Marketing', component: Soon, name: 'Marketing'},
					{path: 'Management', component: Soon, name: 'Management'},
					{path: 'Misc', component: Soon, name: 'Misc'}
				]},
			{path: 'Analytics', component: NavSub,
				indexRoute: {onEnter: (nextState, replace) => replace('/auth/Analytics/DataSearch')},
				childRoutes: [
					{path: 'DataSearch', component: Admin, name: 'Data Search'},
					{path: 'GeoMap', component: GeoMap, name: 'Geo Map Creator'},
					{path: 'SalesReports', component: Soon, name: 'Sales Reports'},
				]},
			{path: 'TimeManager', component: NavSub,
				indexRoute: {onEnter: (nextState, replace) => replace('/auth/TimeManager/ToDoList')},
				childRoutes: [
					{path: 'ToDoList', component: Soon, name: 'To Do List'},
					{path: 'AppointmentCalendar', component: AppCalendar, name: 'Appointment Calendar'},
					{path: 'CompanyEvents', component: Soon, name: 'Company Events'},
					{path: 'VacationCalendar', component: Soon, name: 'Vacation Calendar'},
					{path: 'ManagementReminders', component: Soon, name: 'Management Reminders'},
				]},
			{path: 'psx', component: Soon},
			{path: 'setup', component: Soon}
		]
	}
]

ReactDOM.render(<Router routes={routes} history={baseHistory}/>, document.getElementById('app'))

/*ReactDOM.render((
	<Router history={baseHistory}>
		<Route path='/' component={LoginPage}/>
		<Route path='/auth' component={NavPrime}>
			<IndexRoute component={Dashboard}/>
			<Route path='dashboard' component={Dashboard}/>
			<Route path='contacts' component={Contacts}/>
			<Route path='salesandmarket' component={SalesAndMarket}/>
			<Route path='process' component={Process}/>
			<Route path='data' component={Data}/>
			<Route path='hr' component={Hr}/>
			<Route path='psx' component={Soon}/>
			<Route path='setup' component={Soon}/>
		</Route>
	</Router>
	),
	document.getElementById('app')
)*/
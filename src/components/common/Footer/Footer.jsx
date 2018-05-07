import React, { Component } from 'react'
import './Footer.css'

import { Router } from '../../../router'

import {
	NavLink
} from 'react-router-dom'

class Footer extends Component {
	render() {
		return (
			<footer>
				{
					Router.ROUTER_NAV.map((item, idx) => {
						return <NavLink exact to={item.to} key={idx} activeClassName="active">{item.text}</NavLink>
					})
				}
			</footer>
		)
	}
}

export default Footer
import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
	render() {
		return (
			<header className="cheheader">
				<b>北京市</b>
				<div className="input"></div>
				<i className="iconfont icon-iconfontzhizuobiaozhun22"></i>
			</header>
		)
	}
}

export default Header
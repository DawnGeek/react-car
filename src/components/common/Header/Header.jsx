import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
	Back() {
		window.history.go(-1);
	}
	render() {
		return (
			<header className="dialogheader">
				<i className="iconfont icon-fanhui" onClick={this.Back.bind(this)}></i>
    		<b>{this.props.title}</b>
			</header>
		)
	}
}

export default Header
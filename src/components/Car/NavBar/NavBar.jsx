import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	activeIdx: 0,
	  	navArr: ['排序', '车价', '品牌', '筛选']
	  };
	}
	toggleFn(idx) {
		this.setState({
	    activeIdx: idx
	  });
	}
	componentDidUpdate() {
		const actArr = document.querySelector("nav").querySelectorAll(".act")
		if(actArr[0]) {
			actArr[0].parentNode.className = 'active'
		}
	}
	render() {
		return (
			<nav>
				{
					this.props.children
				}
			</nav>
		)
	}
}

export default NavBar
import React, { Component } from 'react'
import './Header.css'
import {
	NavLink
} from 'react-router-dom'
class Header extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	city: ''
	  };
	}
	componentWillMount() {
		// setTimeout(() => {
		// 		var map = new BMap.Map("allmap");
		// 		var point = new BMap.Point(116.331398,39.897445);
		// 		map.centerAndZoom(point,12);
		// 		function myFun(result){
		// 			var cityName = result.name;
		// 			this.setState({
		// 				city: cityName
		// 			})
		// 		}
		// 		var myCity = new BMap.LocalCity();
		// 		myCity.get(myFun);
		// },0)
	}
	render() {
		return (
			<header className="homeheader">
				<b>{this.state.city}</b>
				<NavLink exact to='/dialog' tag="i" className="iconfont icon-iconfontzhizuobiaozhun22" />
				<div id="allmap"></div>
			</header>
		)
	}
}

export default Header
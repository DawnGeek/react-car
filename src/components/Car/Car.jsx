import React, { Component } from 'react'
import './Car.css'
import Header from './Header'
import Footer from '../common/Footer'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import axios from 'axios'
import { Route, Redirect, Switch, NavLink, BrowserRouter as Router } from 'react-router-dom'
import { Router as R } from '../../router'

class Car extends Component {
	componentWillMount() {
		axios.get('/api/dataChe').then(res => {
      this.props.dispatch({
        type: 'CHE_DATA',
        data: res.data
      })
	  })
	}
	render() {
		const { dataList, match } = this.props;
		const data = R.ROUTER_VIEW[4].children
		return (
			<Router>
				<div className="chebox">
				<Header/>
				<NavBar>
					{
						data.map((item, idx) => {
							return <NavLink to={`${match.url}${item.path}`} exact activeClassName="active" key={idx}><span>{item.text}</span></NavLink>
						})
					}
				</NavBar>
					<Switch>
					{
						data.map((item, idx) => {
              return <Route path={`${match.url}${item.path}`} exact component={item.com} key={idx}/>
            })
					}
					</Switch>
          {/*<Redirect from="/car" to="/car/content"></Redirect>*/}
          
				<Footer/>
				</div>
			</Router>
		)
	}
}

const mapStateToProps = (state,ownProps) =>{
  return {
      dataList : state.CheData.dataList
  }
}
export default connect(mapStateToProps)(Car)
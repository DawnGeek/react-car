import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Order.css'

class Order extends Component {
	litreFn() {
		this.props.dispatch({
			type: 'CHE_LITRE'
		})
		this.props.history.push({
       pathname: './content'
     })
	}
	dropFn() {
		this.props.dispatch({
			type: 'CHE_DROP'
		})
		this.props.history.push({
       pathname: './content'
    })
	}
	render() {
		return (
			<main>
				<p onClick={this.litreFn.bind(this)}>价格最高</p>
				<p onClick={this.dropFn.bind(this)}>价格最低</p>
			</main>
		)
	}
}

const mapStateToProps = (state,ownProps) =>{
  return {
  }
}
export default connect(mapStateToProps)(Order)
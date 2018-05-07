import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Brand.css'

class Brand extends Component {
	toggleFn(item) {
		this.props.dispatch({
			type: 'CHE_BRACK',
			text: item
		})
		this.props.history.push({
       pathname: './content'
     })
	}
	render() {
		return (
			<main>
				{
					this.props.data && this.props.data.map((item, idx) => {
						return <p key={idx} onClick={this.toggleFn.bind(this, item)}>{item}</p>
					})
				}
			</main>
		)
	}
}

const mapStateToProps = (state,ownProps) =>{
  return {
  	data: state.CheData.brandList
  }
}
export default connect(mapStateToProps)(Brand)
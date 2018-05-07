import React, { Component } from 'react'
import { connect } from 'react-redux'
import './CarMain.css'

class CarMain extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	data: []
	  };
	}
	render() {
		const { dataList } = this.props;
		return (
			<main>
				{
					dataList && dataList.map((item, idx) => {
						if(item.carName) {
							return (<div key={idx}>
									<h2>{item.carName}</h2>
									<p><b>{item.price}</b><b>❌</b></p>
								</div>)
						}
					})
				}
			</main>
		)
	}
}

const mapStateToProps = (state,ownProps) =>{
	console.log(state.CheData)
  return {
      dataList : state.CheData.dataList
  }
}

export default connect(mapStateToProps)(CarMain)
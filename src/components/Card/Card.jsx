import React, { Component } from 'react'
import './Card.css'
import Header from '../common/Header'
import axios from 'axios'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'


class Card extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	cityId: '',
	  	scroll: null,
	  	arr: [],
	  	cArr: []
	  };
	}
	componentDidMount() {
		this.setState({
      scroll: new BScroll(this.refs.myBox, {
          click: true,
          bounce: true,
          startY: 0,
          probeType: 3
      })
    })
    
	}
	componentWillMount() {
		axios.get('/api/dataCar').then(res => {
      this.props.dispatch({
        type: 'CAR_DATA',
        data: res.data
      })
	  })
	}
	componentDidUpdate() {

		var nArr = [];
		if(document.querySelectorAll('.asideLi')){
		  for(let i = 0; i < document.querySelectorAll('.asideLi').length; i++) {
		      nArr.push(document.querySelectorAll('.asideLi')[i].offsetTop)
		  }
		  setTimeout(() => {
		  	this.pushFn(nArr)
		  },0)
		}
		// if(this.props.provinceArr) {
		// 	this.setState({
		// 		cArr: this.props.cityArr[this.props.provinceArr[0].letter]
		// 	})
		// }
	}
	pushFn(arr) {
		this.setState({
			arr: arr
		})
	}
	toggle(e) {
		this.setState({
			cArr: this.props.cityArr[e.target.getAttribute("cityid")]
		})	
	}
	toFn(ind) {
		this.state.scroll.scrollTo(0, -this.state.arr[ind],1000);
	}
	render() {
		const { provinceArr } = this.props
		const { cArr } = this.state
		return (
			<div className="carBox">
				<Header title="选择上牌城市"/>
				<div className="carsection">
					<aside ref="myBox">
						<ul>
							{
								provinceArr && provinceArr.map((item, ind) => {
									return (
										<li key={ind} className="asideLi">
											<h5 className="asideTitle">{item.letter}</h5>
											{
												item.province.map((area, idx) => {
													return <p key={idx} cityid={area.id} onClick={this.toggle.bind(this)}>{area.name}</p>
												})
											}
										</li>
									)
								})
							}
						</ul>
					</aside>
					<section>
						<ul>
							{
								cArr && cArr.map((item, ind) => {
									return (
										<li key={ind}>{item.name}</li>
									)
								})
							}
						</ul>
					</section>
					<div className="letterBox">
							{
								provinceArr && provinceArr.map((item, ind) => {
									return <b key={ind} onClick={this.toFn.bind(this, ind)}>{item.letter}</b>
								})
							}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state,ownProps) =>{

  return {
      provinceArr : state.CarData.dataList.provinceArr,
      cityArr: state.CarData.dataList.city
  }
}
export default connect(mapStateToProps)(Card)
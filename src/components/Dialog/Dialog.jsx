import React, { Component } from 'react'
import './Dialog.css'
import Header from '../common/Header'
import { connect } from 'react-redux'
import axios from 'axios'
import {
	NavLink
} from 'react-router-dom'

class Dialog extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	addArr: [], // 添加数组
	  	cheackArr: [] // 元素数组
	  };
	}
	componentWillMount() {
		axios.get('/api/dataCity').then(res => {
      this.props.dispatch({
        type: 'GET_DATA',
        data: res.data
      })
	  })
	}
	removeByValue(arr, val){
  	for(var i= 0; i<arr.length; i++) {
    	if(arr[i] === val) {
      	arr.splice(i, 1);
      	break;
    	}
  	}
	}
	addFn(e) {
		// 获取当前点击的类名， 当前点击的文字，已添加的数组， 已经添加的元素数组
		let className = e.target.className,
				name = e.target.innerText,
				oldArr = this.state.addArr,
				oldElArr = this.state.cheackArr;
		if(className) {
			// 使当前点击的类名取消
			e.target.className = '';
			// 根据自己定义的数组删除的方法将当前点击的文字从 “添加数组” 中删除
			this.removeByValue(oldArr, name);

			// 使相对应的类名删除
			for(let i = 0; i < oldElArr.length; i++) {
        if(name === this.state.cheackArr[i].innerText) {
          oldElArr[i].className = '';
        }
      }
			this.setState({
					cheackArr: oldElArr,
					addArr: oldArr
			})
			this.props.dispatch({
  			type: 'ADD_DATA',
  			data: this.state.addArr
   		})
		} else {
			// 控制电机的数量
			if(this.state.addArr.length < 7) {
				// 给当前的元素添加类名，以及将当前点击的文字添加到 “添加数组” 中
				e.target.className = 'active';
				oldArr.push(name)
				this.setState({
						addArr: oldArr
				})
				// 将当前元素添加到 “元素数组”
				oldElArr.push(e.target);
				this.props.dispatch({
    			type: 'ADD_DATA',
    			data: this.state.addArr
   			})
			}
		}
	}
	removeFn(e) {
		// 获取当前点击的文字，已添加的数组， 已经添加的元素数组
      let name = e.target.innerText,
      		oldArr = this.state.addArr,
      		oldElArr = this.state.cheackArr;
      // 根据自己定义的数组删除的方法将当前点击的文字从 “添加数组” 中删除
      this.removeByValue(oldArr, name);
			// 使相对应的类名删除
      for(let i = 0; i < this.state.cheackArr.length; i++) {
        if(name === this.state.cheackArr[i].innerText) {
          oldElArr[i].className = '';
        }
      }
      this.setState({
				cheackArr: oldElArr,
				addArr: oldArr
				})
      this.props.dispatch({
    		type: 'ADD_DATA',
    		data: this.state.addArr
   		})
  }
	render() {
		const { dataList, addList } =this.props
		return (
			<div className="dialog">
				<Header title="选择城市"/>
				<div className="car">
					<b>选择上牌城市</b>
					<NavLink exact to='/card' tag="i" className="iconfont icon-edit" />
				</div>
				<div className="markBox">
					<ul className="cityBox">
						<li>
							<h5>您已经选城市</h5>
							<div className="listBox">
		            {
		            	addList && addList.map((item, ind) => {
		            		return <span className="or" key={ind} onClick={this.removeFn.bind(this)}>{item}</span>
		            	})
		            }
		          </div>
						</li>
						{
							dataList && dataList.map((item, ind) => {
								return (
									<li key={ind}>
										<h5>{item.letter}</h5>
										<div className="listBox">
										{
											item.province.map((area, idx) => {
												return <span key={idx} onClick={this.addFn.bind(this)}>{area.name}</span>
											})
										}
										</div>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state,ownProps) =>{
	//console.log(state.CityData.addList)
  return {
      dataList : state.CityData.dataList,
      addList : state.CityData.addList
  }
}
export default connect(mapStateToProps)(Dialog)
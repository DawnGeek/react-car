import Home from '../components/Home'
import Mine from '../components/Mine'
import Dialog from '../components/Dialog'
import Card from '../components/Card'
import Car from '../components/Car'
import Content from '../components/Car/CarMain'
import Order from '../components/Car/Order'
import Brand from '../components/Car/Brand'

export const Router = {
	ROUTER_NAV: [{
		text: '首页',
		to: '/home'
	}, {
		text: '买车',
		to: '/car'
	}, {
		text: '我的',
		to: '/mine'
	}],
	ROUTER_VIEW: [{
		path: '/home',
		com: Home
	}, {
		path: '/mine',
		com: Mine
	}, {
		path: '/dialog',
		com: Dialog
	}, {
		path: '/card',
		com: Card
	}, {
		path: '/car',
		com: Car,
		children: [{
			path: '/content',
			text: '内容',
			com: Content
		}, {
			path: '/order',
			text: '排序',
			com: Order
		}, {
			path: '/brand',
			text: '品牌',
			com: Brand
		}]	
	}]
}
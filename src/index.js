import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/common/reset.css'
import './assets/css/fonts/iconfont.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/store'
import App from './App'
import mock from './mock'

mock()

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>, 
	document.getElementById('root')
);

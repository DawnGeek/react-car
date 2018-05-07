import React, { Component } from 'react';
import { Router } from './router'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      	{
      		Router.ROUTER_VIEW.map((item, idx) => {
      			return <Route exact path={item.path} component={item.com} key={idx} />
      		})
      	}
      </div>
    )
  }
}

export default App

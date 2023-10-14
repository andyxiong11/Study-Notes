import React, { Component } from 'react'
import { Route,NavLink } from "react-router-dom"

export default class MyNavLink extends Component {
  render() {
    console.log(this.props);
    return (
      <NavLink activeClassName="atguanggu" className="list-group-item" {...this.props}/>
    )
  }
}

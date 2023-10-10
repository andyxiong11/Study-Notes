import React, { Component } from 'react'
import { Route,NavLink } from "react-router-dom"

export default class MyNavLink extends Component {
  render() {
    console.log(this.props);
    // const {to,title} = this.props
    return (
      // <NavLink activeClassName="atguanggu" className="list-group-item" to={to}>{title}</NavLink>
      // <NavLink activeClassName="atguanggu" className="list-group-item" {...this.props}>{title}</NavLink>
      // <NavLink activeClassName="atguanggu" className="list-group-item" {...this.props}>{this.props.children}</NavLink>
      <NavLink activeClassName="atguanggu" className="list-group-item" {...this.props}/>
    )
  }
}

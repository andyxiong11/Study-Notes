import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input type="text" placeholder="enter the name you search"/>&nbsp;<button>Search</button>
        </div>
      </section>
    )
  }
}

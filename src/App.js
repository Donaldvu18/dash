import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Content from './components/Content'
import Dashboard from './components/Dashboard'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        {/* <Dashboard/> */}
        <Content/>
        {/* <Footer/> */}
      </div>
    )
  }
}

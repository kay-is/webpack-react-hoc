import React from 'react'
import {render} from 'react-dom'
import BigList from 'BigList/lazy'

class App extends React.Component {

  constructor() {

    super()

    this.state = {userLogin: false}

    setTimeout(() => this.setState({userLogin: true}), 2000)

  }

  render() {

    return this.state.userLogin
      ? <BigList/>
      : <h2>Simulating User Login......</h2>

  }

}

render(<App/>, document.getElementById('app'))
import React from 'react'

export default
function lazify(load) {

  return class LazyComponent extends React.Component {

    constructor() {
      super()
      this.state = {Component: null}
    }

    componentDidMount() {

      load().then(m => this.setState({Component: m['default']}))

    }

    render() {

      const {props} = this
      const {Component} = this.state

      return Component? <Component {...props}/> : <span>Loading...</span>

    }

  }

}
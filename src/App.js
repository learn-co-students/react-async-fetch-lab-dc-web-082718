// create your App component here

import React, {Component} from 'react'

export default class App extends Component {
  constructor() {
    super()
  }
  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(json => this.setState({spacePeople: [...json.people]}))
  }
  
   render(){
    return(
      <div>
      </div>
    )
  }
}

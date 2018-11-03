import React, { Component } from 'react'

class App extends Component{

  constructor(){
    super()
    this.state = {
      spacePersons: []
    }
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(r => r.json())
    .then(astros => {
      this.setState({
        spacePersons: astros.people
      })
    })
  }

render(){
  return(
    <div> {this.state.spacePersons.map((person, id) => <h1 key={id}>{person.name}</h1>)} </div>
  )
}


}

export default App

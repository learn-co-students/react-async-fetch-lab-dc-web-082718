// create your App component here
import React from "react"
import Button from "./components/Button"
import ExampleComponent from "./components/ExampleComponent"
import Greeting from "./components/Greeting"


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      people: []
    })
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(data => this.setState({people: data.people}))
  }
  render(){
    return(
      <div>
      </div>
    )
  }

}

export default App

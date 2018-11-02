import React, {Component} from 'react';
import Button from './components/Button'
import ExampleComponent from './components/ExampleComponent'
import Greeting from './components/Greeting'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  render() {
    return (
      <div>
        <Greeting />
        <ExampleComponent />
        <br/>
        {this.state.people.map(person => this.renderPerson(person))}
        <Button />
      </div>
    )
  }

  renderPerson(person) {
    if(person) {
      return(
        <div>{person.name} - {person.craft}</div>
      )
    }
  }

  addPeopleToState = (peopleData) => {

    const newPeople = this.state.people;

    peopleData.people.map(person => newPeople.push(person))

    this.setState({people: newPeople})

  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json').then(res => res.json()).then(this.addPeopleToState)
  }

}

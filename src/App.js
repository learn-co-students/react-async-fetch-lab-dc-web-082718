// create your App component here

import React, {Component} from "react";

export default class App extends Component {

    constructor(){
        super();
        this.state = {
            astros: []
        }
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(({people}) => this.setState({astros:people}))
    }

    generateAstros = () => {
        return this.state.astros.map(naut => {return (<div><h1>Name: {naut.name}</h1>
            <h2>Craft: {naut.craft}</h2></div>)});
    }


    render(){

        return (<div>{this.generateAstros()}</div>)
    }
}

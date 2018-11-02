import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return <div>lol</div>;
  }
}

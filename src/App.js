import React, { Component } from "react";
import Header from "../src/component/Header";
import RiskLevel from "../src/component/RiskLevel";
import Allocation from "../src/component/Allocation";
import Composition from "../src/component/Composition";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: undefined,
      toggle_On: false,
      newPf: undefined
    };
  }

  async componentDidMount() {
    try {
      await fetch("https://demo9414363.mockable.io/api/stashaway/frontend")
        .then(data => {
          return data.json();
        })
        .then(data => {
          console.log(data)
          this.setState({ portfolio: data.Response.Current, newPf: data.Response.New });
        }).catch(Promise.rejection);
    } catch (err) {
      throw err;
    }
  }

handleClick = () => {
  console.log("clicked", this.state)
  this.setState({toggle_On: !this.state.toggle_On})
  this.state.portfolio
}



  render() {
    console.log(this.state.portfolio)
    return <div className="App">
        <Header />

        {this.state.portfolio && <RiskLevel {...this.state.portfolio} />}
        {this.state.portfolio && <Composition {...this.state.portfolio} />}
        </div>;
  }
}

export default App;

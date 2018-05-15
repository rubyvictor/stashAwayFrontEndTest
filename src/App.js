import React, { Component } from "react";
import Header from "../src/Header";
import RiskLevel from "../src/RiskLevel";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("initialised");
    this.state = {
      portfolio: []
    };

    // const portfolio_types = [
    //   { type: "standard", returns: "6%", VaR: "3%", optimized: "USD" },
    //   { type: "less_risky", returns: "3%", VaR: "1.5%", optimized: "JPY" },
    //   { type: "more_risky", returns: "9%", VaR: "5%", optimized: "EUR" }
    // ];

    // const pf_types = [];
    // portfolio_types.forEach(portfolio_type => {
    //   console.log(portfolio_type);
    //   pf_types.push(<p>portfolio type:{portfolio_type}</p>);
    // });
  }

  async componentDidMount() {
    try {
      await fetch("https://demo9414363.mockable.io/api/stashaway/frontend")
        .then(data => {
          return data.json();
        })
        .then(data => {
          console.log(data)
          await this.setState({ portfolio: data });
        });
    } catch (err) {
      throw err;
    }
  }

  // this.State({ portfolio: pf_types });
  // console.log(this.state.portfolio)

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.portfolio.map((pf_type, i) => {
          console.log(pf_type);
          return (
            <div>
              <RiskLevel
                key={i}
                type={pf_type.type}
                returns={pf_type.returns}
                risk={pf_type.VaR}
                optimized={pf_type.optimized}
              />
            </div>
          );
        })}
        {this.state.portfolio}
      </div>
    );
  }
}

export default App;

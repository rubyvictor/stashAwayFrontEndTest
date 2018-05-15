import React, { Component } from "react";
import Header from "../src/Header";
import RiskLevel from "../src/RiskLevel";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    console.log("initialised")
    this.state = {
      portfolio: []
    }

    const portfolio_types = [
      { type: "standard", returns: "6%", VaR: "3%", optimized: "USD" },
      { type: "less_risky", returns: "3%", VaR: "1.5%", optimized: "JPY" },
      { type: "more_risky", returns: "9%", VaR: "5%", optimized: "EUR" }
    ];

    const pf_types = [];
    portfolio_types.forEach(portfolio_type => {
      console.log(portfolio_type);
      pf_types.push(<p>portfolio type:{portfolio_type}</p>);
    });

    this.setState = { portfolio: pf_types };
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.portfolio.map((pf_type, i) => {
          return (
            <div>
              <RiskLevel
                type={pf_type.type}
                returns={pf_type.returns}
                risk={pf_type.VaR}
                optimized={pf_type.optimized}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

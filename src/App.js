import React, { Component } from "react";
import Header from "../src/component/Header";
import RiskLevel from "../src/component/RiskLevel";
import Allocation from "../src/component/Allocation";
import Composition from "../src/component/Composition";
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
          console.log(data);
          const obj = JSON.parse(data.json);
          this.setState({ portfolio: obj.response.customer });
        });
    } catch (err) {
      return Promise.reject(err);
    }
  }

  // this.State({ portfolio: pf_types });
  // console.log(this.state.portfolio)

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.portfolio.map((element, i) => {
          console.log(element);
          return (
            <div>
              <RiskLevel
                key={i}
                type={element.type}
                returns={element.returns}
                risk={element.VaR}
                optimized={element.optimized}
              />
            </div>
          );
        })}
        {this.state.portfolio.map((element, i) => {
          return (
            <div>
              <Composition key={i} currency={element.currency_exposure} />
            </div>
          );
        })}
        {this.state.portfolio.map((element, i) => {
          return <div>
              <Allocation key={i} Total={element.Total} Dividends={element.Dividends} Small_cap={element.Small_cap_growth} Mid_cap={element.Mid_cap_value} Convertible={element.Convertible_bonds} Asia={element.Asia_ex_japan} China={element.China_equities} US={element.US_total_stock} Bonds={element.Bonds}/>
            </div>;
        })}
      </div>
    );
  }
}

export default App;

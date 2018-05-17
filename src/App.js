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
  }

  async componentDidMount() {
    try {
      await fetch("https://demo9414363.mockable.io/api/stashaway/frontend")
        .then(data => {
          return data.json();
        })
        .then(data => {
          console.log(data);
          this.setState({ portfolio: data.Response.Customer });
        });
    } catch (err) {
      return Promise.reject(err);
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        {this.state.portfolio.map((element, i) => {
          console.log(element.currency_exposure.USD);
          return (
            <div>
              <RiskLevel
                key={i}
                type={element.portfolio_type}
                returns={element.exp_returns}
                risk={element.VaR}
                optimized={element.optimised_for}
              />
            </div>
          );
        })}
        {this.state.portfolio.map((element, i) => {
          return (
            <div>
              <Composition key={i} USD={element.currency_exposure.USD} SGD={element.currency_exposure.SGD} EUR={element.currency_exposure.EUR} JPY={element.currency_exposure.JPY} Others={element.currency_exposure.Others} />
            </div>
          );
        })}
        {this.state.portfolio.map((element, i) => {
          return <div>
              <Allocation key={i} Total={element.Total.VTTI} Dividends={element.Dividends.VIG} Small_cap={element.Small_cap_growth.VBK} Mid_cap={element.Mid_cap_value.VOE} Convertible={element.Convertible_bonds.CWB} Asia={element.Asia_ex_japan.VTIT} China={element.China_equities.PGJ} US={element.US_total_stock.VTI} Bonds={element.Bonds.CBB}/>
            </div>;
        })}
      </div>
    );
  }
}

export default App;

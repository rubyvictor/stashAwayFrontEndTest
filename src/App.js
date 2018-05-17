import React, { Component } from "react";
import Header from "../src/component/Header";
import RiskLevel from "../src/component/RiskLevel";
import Allocation from "../src/component/Allocation";
import Composition from "../src/component/Composition";

class App extends Component {
  constructor(props) {
    super(props);
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
          return (
            <div>
              <RiskLevel
                key={i}
                type={element.portfolio_type}
                returns={element.exp_returns}
                risk={element.VaR}
                optimized={element.Optimised_for}
              />
            </div>
          );
        })}
        {this.state.portfolio.map((element, i) => {
          return (
            <div>
              <Composition
                key={i}
                USD={element.currency_exposure.USD}
                SGD={element.currency_exposure.SGD}
                EUR={element.currency_exposure.EUR}
                JPY={element.currency_exposure.JPY}
                Others={element.currency_exposure.Others}
              />
            </div>
          );
        })}
        {this.state.portfolio.map((element, i) => {
          return (
            <div>
              <Allocation
                key={i}
                US_Equities={element.Allocation[0]}
                International_Equities={element.Allocation[1]}
                International_Bonds={element.Allocation[2]}
                Total={element.Total[1]}
                Dividends={element.Dividends[1]}
                Small_cap={element.Small_cap_growth[1]}
                Mid_cap={element.Mid_cap_value[1]}
                Convertible={element.Convertible_bonds[1]}
                Asia={element.Asia_ex_japan[1]}
                China={element.China_equities[1]}
                US={element.US_total_stock[1]}
                Bonds={element.Bonds[1]}
                Ticker_usa={element.Total[0]}
                Ticker_div={element.Dividends[0]}
                Ticker_small={element.Small_cap_growth[0]}
                Ticker_mid={element.Mid_cap_value[0]}
                Ticker_convert={element.Convertible_bonds[0]}
                Ticker_asia={element.Asia_ex_japan[0]}
                Ticker_china={element.China_equities[0]}
                Ticker_US={element.US_total_stock[0]}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

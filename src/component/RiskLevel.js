import React, { Component } from "react";
import "./RiskLevel.css";

class RiskLevel extends Component {
  render() {

    return (
      <div className="risk_wrapper">
        <p>StashAway's {this.props.type} portfolio</p>
        <div className="risk_container">
          <div className="risklevel_returns">Expected Annual Returns:</div>
          <div className="risklevel_var">VaR:</div>
          <div className="risklevel_optimised">Optimised for:</div>
        </div>
        <div className="risk_container_two">
          <div className="risklevel_returns_data">{(this.props.exp_returns*100).toFixed(2)+"%".toString()}</div>
          <div className="risklevel_var_data">{(this.props.var*100).toFixed(2)+"%".toString()}</div>
          <div className="risklevel_optimised_data">{this.props.optimised_for}</div>
        </div>
      </div>
    );
  }
}

export default RiskLevel;

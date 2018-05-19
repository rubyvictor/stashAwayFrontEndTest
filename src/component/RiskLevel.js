import React, { Component } from "react";
import "./RiskLevel.css";

class RiskLevel extends Component {
  modifyDataToPercent = data => {
    return (data * 100).toFixed(2) + "%".toString();
  };

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
          <div className="risklevel_returns_data">
            {this.modifyDataToPercent(this.props.exp_returns)}
          </div>
          <div className="risklevel_var_data">
            {this.modifyDataToPercent(this.props.var)}
          </div>
          <div className="risklevel_optimised_data">
            {this.props.optimised_for}
          </div>
        </div>
      </div>
    );
  }
}

export default RiskLevel;

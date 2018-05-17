import React, { Component } from "react";
import "../../src/App.css";

class RiskLevel extends Component {
  render() {
    return (
      <div>StashAway's{this.props.type}portfolio
      <table>
      <tbody>
      <tr>
      <td>
      <h3>{this.props.returns}</h3>
      </td>
      <td>
      <h2>{this.props.risk}</h2>
      </td>
      <td>
      <p>{this.props.optimized}</p>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
    );
  }
}

export default RiskLevel;

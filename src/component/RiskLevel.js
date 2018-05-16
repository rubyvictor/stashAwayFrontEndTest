import React, { Component } from "react";
import "../../src/App.css";

class RiskLevel extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h3>{this.props.returns}</h3>
            </td>
            <td>
              <p>{this.props.risk}</p>
            </td>
            <td>
              <p>{this.props.optimized}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default RiskLevel;

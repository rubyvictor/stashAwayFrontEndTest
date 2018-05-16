import React from "react";

const Composition = (props) => {
  return (
    <div>
      Composition component
      <table>
        <tbody>
          <tr>
            <td>
              <p>{this.props.currency.USD}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{this.props.currency.SGD}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{this.props.currency.EUR}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{this.props.currency.JPY}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{this.props.currency.Others}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Composition;

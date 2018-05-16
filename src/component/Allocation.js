import React from "react";

const Allocation = (props) => {
  return (
    <div>
      Allocation component
      <table>
        <tbody>
          <tr>
            <td>
              <p>{this.props.Total}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{this.props.Dividends}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{this.props.Small_cap}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{this.props.Mid_cap}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{this.props.Convertible}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{this.props.China}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{this.props.US}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{this.props.Bonds}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Allocation;

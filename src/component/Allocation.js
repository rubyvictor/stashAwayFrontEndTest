import React from "react";

const Allocation = props => {
  return (
    <div>
      Allocation component
      <table>
        <tbody>
          <tr>
            <td>
              <p>{props.Total}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{props.Dividends}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{props.Small_cap}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{props.Mid_cap}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{props.Convertible}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{props.China}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{props.US}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{props.Bonds}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Allocation;

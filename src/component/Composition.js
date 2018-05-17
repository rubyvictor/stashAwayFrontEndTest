import React from "react";

const Composition = props => {
  return (
    <div>
      Composition component
      <table>
        <tbody>
          <tr>
            <td>
              <p>{props.USD}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{props.SGD}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{props.EUR}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{props.JPY}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{props.Others}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Composition;

import React from "react";

const Header = () => {
  return (
    <table className="App-header">
      <thead>
        <tr>
          <th>StashAway</th>
          <th className="topnav-right">
            <ul>Support</ul>
            <ul>Logout</ul>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Review your portfolio</td>
          <td></td>
          <td>You can always change this later.</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Header;

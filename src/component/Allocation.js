import React from "react";
import "./Allocation.css";
// import { Line } from "rc-progress";

const Allocation = props => {
  function modifyDataToPercent(data) {
    return (data * 100).toFixed(2) + "%".toString();
  }

  return (
    <div className="allocation_wrapper">
      Asset Allocation
      <div className="allocation_header">
        <ul>ASSET NAME</ul>
        <ul>TICKER</ul>
        <ul>WEIGHT</ul>
      </div>
      <div className="allocation_container">
        <div className="us_equities_header">{props.allocation_one.type}</div>
        <div>{props.allocation_one.etfs[0].first}</div>
        <div className="ticker_usa">{props.allocation_one.etfs[0].ticker}</div>
        <div>{modifyDataToPercent(props.allocation_one.etfs[0].weight)}</div>
        <div>{props.allocation_one.etfs[1].second}</div>
        <div>{props.allocation_one.etfs[1].ticker}</div>
        <div>{modifyDataToPercent(props.allocation_one.etfs[1].weight)}</div>
        <div>{props.allocation_one.etfs[2].third}</div>
        <div>{props.allocation_one.etfs[2].ticker}</div>
        <div>{modifyDataToPercent(props.allocation_one.etfs[2].weight)}</div>
        <div>{props.allocation_one.etfs[3].fourth}</div>
        <div>{props.allocation_one.etfs[3].ticker}</div>
        <div>{modifyDataToPercent(props.allocation_one.etfs[3].weight)}</div>
        <div>{props.allocation_one.etfs[4].fifth}</div>
        <div>{props.allocation_one.etfs[4].ticker}</div>
        <div>{modifyDataToPercent(props.allocation_one.etfs[4].weight)}</div>
        <div className="Int_equities_header">{props.allocation_two.type}</div>
        <div>{props.allocation_two.etfs[0].first}</div>
        <div>{props.allocation_two.etfs[0].ticker}</div>
        <div>{modifyDataToPercent(props.allocation_two.etfs[0].weight)}</div>
        <div>{props.allocation_two.etfs[1].second}</div>
        <div>{props.allocation_two.etfs[1].ticker}</div>
        <div>{modifyDataToPercent(props.allocation_two.etfs[1].weight)}</div>
        <div>{props.allocation_two.etfs[2].third}</div>
        <div>{props.allocation_two.etfs[2].ticker}</div>
        <div>{modifyDataToPercent(props.allocation_two.etfs[2].weight)}</div>
        <div className="Int_bonds_header">{props.allocation_three.type}</div>
        <div>{props.allocation_three.etfs[0].first}</div>
        <div>{props.allocation_three.etfs[0].ticker}</div>
        <div>{modifyDataToPercent(props.allocation_three.etfs[0].weight)}</div>
      </div>
    </div>
  );
};

export default Allocation;

import React from "react";
import "./Allocation.css"

const Allocation = props => {
  return (
    <div className="allocation_wrapper">
      Asset Allocation
      <div className="allocation_header">
        <ul>ASSET NAME</ul>
        <ul>TICKER</ul>
        <ul>WEIGHT</ul>
      </div>
      <div className="allocation_container">
        <div className="us_equities_header">{props.US_Equities}</div>
        <div>US Equities(Total)</div>
        <div className="ticker_usa">{props.Ticker_usa}</div>
        <div>{props.Total}</div>
        <div>US Equities(Dividends)</div>
        <div>{props.Ticker_div}</div>
        <div>{props.Dividends}</div>
        <div>US Equities(Small_cap, Growth)</div>
        <div>{props.Ticker_small}</div>
        <div>{props.Small_cap}</div>
        <div>US Equities(Mid_cap, Value)</div>
        <div>{props.Ticker_mid}</div>
        <div>{props.Mid_cap}</div>
        <div>Convertible Bonds</div>
        <div>{props.Ticker_convert}</div>
        <div>{props.Convertible}</div>
        <div className="Int_equities_header">{props.International_Equities}</div>
        <div>Asian Ex-japan Equities</div>
        <div>{props.Ticker_asia}</div>
        <div>{props.Asia}</div>
        <div>China Equities</div>
        <div>{props.Ticker_china}</div>
        <div>{props.China}</div>
        <div>US Total Stock</div>
        <div>{props.Ticker_US}</div>
        <div>{props.US}</div>
        <div className="Int_bonds_header">{props.International_Bonds}</div>
        <div>International Bonds</div>
        <div>{props.Ticker_bonds}</div>
        <div>{props.Bonds}</div>
      </div>
    </div>
  );
};

export default Allocation;

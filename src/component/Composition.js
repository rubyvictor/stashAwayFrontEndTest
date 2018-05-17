import React from "react";
import "./Composition.css";

const Composition = props => {
  return (
    <div className="composition_wrapper">
      <p id="composition_title">Portfolio Composition</p>
      <p id="composition_subtitle">Global Currency Exposure</p>
      <div className="composition_container">
        <div className="usd_container">
          <div className="composition_usd_box" />
          <div className="composition_usd_label">USD</div>
          <div className="composition_usd">{props.USD}</div>
        </div>
        <div className="sgd_container">
          <div className="composition_sgd_box" />
          <div className="composition_sgd_label">SGD</div>
          <div className="composition_sgd">{props.SGD}</div>
        </div>
        <div className="eur_container">
          <div className="composition_eur_box" />
          <div className="composition_eur_label">EUR</div>
          <div className="composition_eur">{props.EUR}</div>
        </div>
        <div className="jpy_container">
          <div className="composition_jpy_box" />
          <div className="composition_jpy_label">JPY</div>
          <div className="composition_jpy">{props.JPY}</div>
        </div>
        <div className="others_container">
          <div className="composition_others_box" />
          <div className="composition_others_label">Others</div>
          <div className="composition_others">{props.Others}</div>
        </div>
      </div>
    </div>
  );
};

export default Composition;

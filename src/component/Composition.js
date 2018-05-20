import React from "react";
import "./Composition.css";

const Composition = props => {
  function modifyDataToPercent(data) {
    return (data * 100).toFixed(2) + "%".toString();
  }

  return (
    <div className="composition_wrapper">
      <p id="composition_title">Portfolio Composition</p>
      <p id="composition_subtitle">Global Currency Exposure</p>
      <div className="composition_container">
        <div className="usd_container">
          <div className="composition_usd_box" />
          <div className="composition_usd_label">USD</div>
          <div className="composition_usd">
            {modifyDataToPercent(props.currency_exposure.usd)}
          </div>
        </div>
        <div className="sgd_container">
          <div className="composition_sgd_box" />
          <div className="composition_sgd_label">SGD</div>
          <div className="composition_sgd">
            {modifyDataToPercent(props.currency_exposure.sgd)}
          </div>
        </div>
        <div className="eur_container">
          <div className="composition_eur_box" />
          <div className="composition_eur_label">EUR</div>
          <div className="composition_eur">
            {modifyDataToPercent(props.currency_exposure.eur)}
          </div>
        </div>
        <div className="jpy_container">
          <div className="composition_jpy_box" />
          <div className="composition_jpy_label">JPY</div>
          <div className="composition_jpy">
            {modifyDataToPercent(props.currency_exposure.jpy)}
          </div>
        </div>
        <div className="others_container">
          <div className="composition_others_box" />
          <div className="composition_others_label">Others</div>
          <div className="composition_others">
            {modifyDataToPercent(props.currency_exposure.others)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Composition;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import StoreClassConstants from "../../utils/StoreClassConstants";
import IHomeProps from "./IHomeProps";
import "./Home.scss";

@inject(StoreClassConstants.UtilStore)
@observer
export default class Home extends Component<IHomeProps> {
  render() {
    return (
      <div className="home-content">
        <h2>{this.props.utilStore!.greetingMessage}</h2>
        <p>{this.props.utilStore!.applicationName}</p>
      </div>
    );
  }
}

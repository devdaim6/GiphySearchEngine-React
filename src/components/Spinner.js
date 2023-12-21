import React, { Component } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <FontAwesomeIcon style={{ color: "white" }} icon={faSpinner} />
      </div>
    );
  }
}

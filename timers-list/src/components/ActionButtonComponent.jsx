import React from "react";
import { Button } from "reactstrap";
import "../css/ActionButton.css";

export default function ActionButton(props) {
  return (
    <div>
      <Button
        type={props.type}
        onClick={props.onClick}
        className={"custom-button " + props.className}
        form={props.form}
        variant={props.variant}
      >
        {(props.children).toUpperCase()}
      </Button>
    </div>
  );
}

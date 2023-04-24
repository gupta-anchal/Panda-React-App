import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const ErrorMessage = (props) => {
  return (
    <div>
      <div>
        <FontAwesomeIcon
          className="fa-5x m-4 text-danger"
          icon={faCircleExclamation}
        />
      </div>
      <p className="d-inline-block p-2 bg-danger bg-opacity-25 bg-lighten-xl text-body fw-bold rounded-3">{props.error}</p>
    </div>
  );
};

export default ErrorMessage;

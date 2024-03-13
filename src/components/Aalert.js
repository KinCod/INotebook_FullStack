import React from "react";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

function Aalert(props) {
  return (
    <>
      {props.alert.type && <Alert className="absolute w-full" color={props.alert.type} icon={HiInformationCircle}>
        <span className="font-medium"></span>{props.alert.message}
      </Alert>}
    </>
  );
}

export default Aalert;

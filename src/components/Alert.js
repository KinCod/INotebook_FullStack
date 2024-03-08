import React from "react";

function Alert(props) {
  return (
    <>
      <div
        className="flex w-full sticky top-0 items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-b-lg bg-red-50"
        role="alert"
      >
        <i className="fa-solid fa-circle-info"></i>
        <span className="sr-only">Info</span>
        <div>
          <span className="ml-4 font-medium">Deleted Note with Title : {props.message}</span> 
        </div>
      </div>
    </>
  );
}

export default Alert;

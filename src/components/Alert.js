import React from "react";

function Alert(props) {
  return (
    <>
      <div
        className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-b-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
        role="alert"
      >
        <i class="fa-solid fa-circle-info"></i>
        <span className="sr-only">Info</span>
        <div>
          <span className="ml-4 font-medium">{props.message}</span> 
        </div>
      </div>
    </>
  );
}

export default Alert;

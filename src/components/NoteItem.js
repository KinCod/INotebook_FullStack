import React from "react";
import Alert from "./Alert";

function NoteItem(props) {
  const { notes } = props;
  
  return (
    <>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {notes.title}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {notes.description}
          </p>
        </div>
        <div className="p-6 pt-0 flex gap-5 items-center justify-between">
            <span className="flex gap-4 items-center [&>i]:cursor-pointer">
            <i className="fa-solid fa-trash-can"/>
            <i className="fa-regular fa-pen-to-square"/>
            </span>
            
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20  focus:shadow-none active:bg-cyan-700 active:shadow-none"
            type="button"
          >
            {notes.tag}
          </button>
        </div>
      </div>
    </>
  );
}

export default NoteItem;

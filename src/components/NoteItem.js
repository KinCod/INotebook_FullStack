import React from "react";
import NoteContext from "../context/notes/noteContext";
import { useContext } from "react";

function NoteItem(props) {
  const { notes, updateNote } = props;

  const context = useContext(NoteContext);

  const { deleteNote, alert } = context;

  const del = () => {
    deleteNote(notes._id);
    alert(notes._id); //ab setting alert -> context mai func hoga jo alert ko activate krega
  };

  //props k through particular note ki details iss page par aari when map fucntion runs in the NOTES.js
  //Now jab iss component ka delete icon click hoga method run hoga jo deleteNote function ko id of Particular note dedega
  //and boom phir vo Function uss id wale note ko delete kardega from the db

  return (
    <>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 transition-all duration-200 hover:bg-slate-100">
        <div className="p-6">
          <h5 className="block uppercase mb-2 font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
            {notes.title}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {notes.description}
          </p>
        </div>
        <div className="p-6 pt-0 flex gap-5 items-center justify-between">
          <span className="flex gap-4 items-center [&>i]:cursor-pointer">
            <i
              className="fa-solid fa-trash-can hover:text-rose-600 transition-all duration-125 hover:transform-gpu hover:scale-125 hover:rotate-12"
              onClick={del}
            />
            {/* This is the icon jismai onclick lgega*/}
            <i
              className="fa-regular hover:text-sky-500 fa-pen-to-square transition-all duration-125 hover:transform-gpu hover:scale-125 hover:rotate-12"
              onClick={() => {
                updateNote(notes);
              }}
            />{" "}
            {/*Provided the method with note to be edited */}
          </span>

          <button
            className="align-middle select-none font-sans font-semibold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 "
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

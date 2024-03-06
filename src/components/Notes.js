import React from "react";

import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import Addnote from "./Addnote";

const Notes = () => {
  const context = useContext(NoteContext);
  const {notes} = context; //DESTRUCTURING se maine directly context se notes and setNotes ko access kar lia and ab directly use kar skta
  return (
    <>
      <Addnote />

      <h1 className="mt-5 text-6xl">Your NOtes</h1>
      <div className="flex flex-wrap gap-5 items-center justify-center w-screen h-auto px-4 py-8 mt-20">
        {notes.map((note) => {
          return <NoteItem key={note._id} notes={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;

"use client";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

import { useContext, useEffect, useRef } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import Addnote from "./Addnote";

const Notes = () => {
  const [openModal, setOpenModal] = useState(false);

  const context = useContext(NoteContext);
  const { notes, getAllNotes ,editNote} = context; //DESTRUCTURING se maine directly context se notes and setNotes ko access kar lia and ab directly use kar skta

  //⁡⁢⁣⁣​‌‌‍𝕋𝕙𝕚𝕤 𝕚𝕤 𝕥𝕠𝕥𝕒𝕝𝕝𝕪 c𝕠𝕟𝕟𝕖𝕔𝕥𝕖𝕕 𝕥𝕠 𝕄𝕆𝕕𝔸𝕃​⁡
  const [note, setNote] = useState({title:"",description : "",tag: ""})
  const handleSubmit = () => {     
    editNote(note._id,note.title, note.description,note.tag);
  };
  
  const onChange = (e) =>{          //idhar we took the event
    //jaise hi value badlegi you have to do something
    setNote({...note,[e.target.name]: e.target.value })  
  }

  //Just the useEffect to ⁡⁢⁣⁢​‌‍‌𝗙𝗲𝘁𝗰𝗵​⁡ noted on ⁡⁢⁣⁢​‌‌‍𝗿𝗲𝗳𝗿𝗲𝘀𝗵​⁡
  useEffect(() => {
    // eslint-disable-next-line
    getAllNotes(); //wil run onnly on opening/refreshing of webPage
  },[]);

  //⁡⁢⁣⁣​‌‍‌𝕌𝕡𝕕𝕒𝕥𝕚𝕟𝕘 𝕥𝕙𝕖 𝕟𝕠𝕥𝕖​⁡
  const updateNote = (note) => {
    //ye for a particular note (uske liye ek ⁡⁢⁣⁣𝗠𝗢𝗗𝗔𝗟 𝗸𝗵𝗼𝗹𝗲𝗴𝗮⁡ and phir uske baad usmai hum update krenge and tab ⁡⁢⁣⁣Edit node⁡ from the context use hoga)

    ref.current.click(); //jo bhi iss ref se connected element hai uske click wali Default functionality run huyi
    setNote(note);
  };

  const ref = useRef(null); //access kro reference ko but kuch bhi changes na kro

  
  return (
    <>
      <Addnote />

      <Button className="hidden" ref={ref} onClick={() => setOpenModal(true)}>
        Toggle modal
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Update note</Modal.Header>
        <Modal.Body>
          <form className="max-w-md mx-auto my-5">
            <div className="text-left mb-5">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Enter the Title
              </label>
              <input
                onChange={onChange}
                name="title"
                type="text"
                id="title"
                value={note.title}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Aise daal randi k bacche : name@flowbite.com"
                required
              />
            </div>
            <div className="text-left mb-5">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Enter the Description
              </label>
              <input
                onChange={onChange}
                type="text"
                name="description"
                id="description"
                value={note.description}
                placeholder="accha itna bhi ni aata ab ANPADH"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="text-left mb-5">
              <label
                htmlFor="tag"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Tag
              </label>
              <input
                onChange={onChange}
                type="text"
                name="tag"
                id="tag"
                value={note.tag}
                placeholder="Enter the TAG"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {setOpenModal(false);handleSubmit();}}>Update Note</Button>
        </Modal.Footer>
      </Modal>

      <h1 className="mt-10 text-5xl font-thin">Your Notes</h1>
      <div className="flex flex-wrap gap-5 items-center justify-center w-full h-auto px-4 py-8 mt-10">
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} notes={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;

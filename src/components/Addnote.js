import React, { useEffect, useState} from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";

const Addnote = (props) => {

  const navigate = useNavigate();
  useEffect(() => {
   
    //​‌‍‌⁡⁢⁣⁣𝗔⁡⁢⁣⁢𝗴𝗮𝗿 𝗧𝗼𝗸𝗲𝗻 𝗵𝗮𝗶​ ⁡Tab hi Home mai enter kro Vrna ⁡⁢⁣⁣​‌‍‌𝗣𝗲𝗵𝗹𝗲 𝗹𝗼𝗴𝗶𝗻 𝘆𝗮 𝗦𝗶𝗴𝗻𝘂𝗽​⁡ kro
    if(! localStorage.getItem('token')) navigate('/login');

    //eslint-disable-next-line
  },[]);

  const context = useContext(NoteContext);
  const { addNote } = context; //ye func tab call krenge jab form mai saari entry ho Gyi ho

  const handleSubmit = (e) => {
    //ab obv onchange bhi chal lia and state mai bhi new note ka data store holia ab bas humein context se lia hua add note func run karna hai
    e.preventDefault();        //jo bhi event hai uski default working stop krega(reload ni hoga page on submission)
    
    addNote(note.title, note.description,note.tag);
    props.showAlert("Added Note with title : "+note.title,"success");
    setNote({title:"",description : "",tag: ""});
  };

  //toh we'll make a state and usmai changes done in the input add hojayenge using the onChange method
  const [note, setNote] = useState({title:"",description : "",tag: ""})

  const onChange = (e) =>{          //idhar we took the event
    //jaise hi value badlegi you have to do something
    setNote({...note,[e.target.name]: e.target.value })  //this says ki note jaisa hai vaise hi rehne do but if given target names mai koi change aaya
                                                        //then usko given note mai replace kardo
                                                        //EG> say name:Description mai changes kre toh obv targer value has changed so 
                                                        //baaki note same rhega only the name:Description and Its Value will change in the object
  }

  return (
    <div className="w-full text-center">
      <h1 className="mt-16 mb-10 text-7xl font-thin text-blue-800">Add a Note</h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto my-5">
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
            minLength={5}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add 'Title' (min Length : 5) "
            required
            value={note.title}
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
            placeholder="Description (min Length : 5)"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={note.description}
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
            placeholder="Enter the TAG"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={note.tag}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Addnote;

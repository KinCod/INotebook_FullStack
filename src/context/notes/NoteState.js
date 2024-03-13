import { useState } from "react";
import NoteContext from "./noteContext"; //contezxt vali file mai bas context ko janam dia
import { useNavigate } from "react-router-dom";
//udhar bhi states ko populate kar skte thee but clean rkhna code

const NoteState = (props) => {

  const host = "http://localhost:5000/";

  const [notes, setNotes] = useState([]); //this is used to access and update notes

  //⁡⁢⁣⁣​‌‌‍𝕪𝕖 𝕓𝕒𝕤𝕚𝕔𝕒𝕝𝕝𝕪 𝕤𝕒𝕒𝕣𝕖 𝕟𝕠𝕥𝕖𝕤 𝕜𝕠 𝕗𝕖𝕥𝕔𝕙 𝕜𝕣𝕝𝕖𝕘𝕒 𝕥𝕙𝕣𝕠𝕦𝕘𝕙 𝔻𝕓⁡⁡​
  /* 
    ⁡⁢⁣⁡⁢⁢⁢1. isko use krenge in Notes.js component as obv vohi base compo hai jidhar notes are used to print
    2. SO udhar we'll be using useEffect jo hmesha on tab open run hoga
        -> So basically jab bhi page update hoga we'll getAllnotes and phir inko set krdenge into notes to be printed on page⁡⁡
  */
  // console.log(auth);

  const getAllNotes = async () => {
    const url = `${host}api/notes/fetchNotes/`;

    const response = await fetch(url, {
      method: "GET", // *GET, POST,
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json(); //response aane mai obv time lgega as we're dealing with async DB
    
    console.log(json);
    if(json.error) {
      window.alert("Internal Error. Please SignUp Again!!")
      localStorage.removeItem('token');
      localStorage.removeItem('name');
    }else{
      setNotes(json);
    }

    //ismai saare notes set hojaenge and will be provisded to notes.js and ultimately show hoenge in screen
    
  };

  //⁡⁢⁣⁣​‌‌‍𝕒𝕕𝕕𝕚𝕟𝕘 𝕒 𝕟𝕠𝕕𝕖 𝔽𝕦𝕟𝕔⁡​⁡

  const addNote = async (title, description, tag) => {
    //Api call
    const url = `${host}api/notes/addNotes/`;

    const response = await fetch(url, {
      method: "POST", // *GET, POST,
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }), // body data type (and api ki body ko provide kya krana that it may request)
    });
    const newNote = await response.json();

    console.log(notes);
    setNotes(notes.concat(newNote));
  };

  //⁡⁢⁢⁢​‌‌‍⁡⁢⁣⁣𝕕𝕖𝕝𝕖𝕥𝕚𝕟𝕘​•⁡

  const deleteNote = async (id) => {
    //isko note ki id aaega
    //~FETCH API
    const url = `${host}api/notes/deleteNotes/${id}`;

    //the fetch api to access the api that will edit a note in the db
    const response = await fetch(url, {
      //ye basically particular api ko run krvadenge and uska response rakh lenge
      method: "DELETE", // *GET, POST,
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    console.log(await response.json());

    //new Notes wala object bna lia jismai vo note exist ni krega jiski id aayi
    const newNotes = notes.filter((note) => {
      return id !== note._id;
    });

    //phir bas isko setNotes krdo and ultimately final notes mai ye exist ni krega
    setNotes(newNotes);
  };

  //⁡⁢⁣⁣​‌‌‍‍𝕦𝕡𝕕𝕒𝕥𝕚𝕟𝕘​⁡

  const editNote = async (id, title, description, tag) => {
    const url = `${host}api/notes/update/${id}`; //ye hai api ki url that will be provided with a parameter ,ie, the id;

    //the fetch api to access the api that will edit a note in the db
    const response = await fetch(url, {
      //ye basically particular api ko run krvadenge and uska response rakh lenge
      method: "POST", // *GET, POST,
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }), // body data type (and api ki body ko provide kya krana that it may request)
    });

    console.log(await response.json());

    //for the changes to ⁡⁢⁣⁣𝗿𝗲𝗳𝗹𝗲𝗰𝘁 𝗶𝗻 𝗳𝗿𝗼𝗻𝘁𝗘𝗻𝗱⁡
    const UpNote = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < UpNote.length; index++) {
      if (UpNote[index]._id === id) {
        UpNote[index].title = title;
        UpNote[index].description = description;
        UpNote[index].tag = tag;
      }
    }

    setNotes(UpNote); //because directly change hogya hoga
  };

  //state to save Present Users data

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, getAllNotes, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

//note state tag k under aane wale saare baccho ko ye value free mai baanti jayegi
//Maze kro

/* USECONTEXT --> TOh sirf isko aap states k liye hi nhi balki common func k liye bhi use kar skte eg. jo update wla hai
1. context ka birth kra in notecontext and vohi use hoga as provider and jab component mai access krna hoga tab bhi vohi use hoga
2. okay phir humne State wala part bnaya jidhar hum states bnaenge and usko hum saare components pe share kar skte
3. uske liye sbse pehle apko app.js(base js) mai haar attribute k top pe NoteState wala tag pelna hoga tab hi populate hoga context
4. phir uss component k andar use context kro and access karlo joh bhi state access krni
        // yaad rakhna ye jo provider k baad value={} likha hai na iske andar jo bhi hoga vo saare children acces kar skte
        //jaise abhi name and update method hai toh ye aaram se sab access kar skte
*/

//ab hum iss note state ko app.js mai import krke sabko iske ek tag mai rakh lenge
//and boom sab context ka use kar skte to access states

/*
// const s1 = {
  //     "name" : "lalla",
  //     "class" : "V-B"
  // }

  // const [name,setName] = useState(s1);

  // const update = () =>{          //bas set kardega ye new wala object into the state using setName method after 1sec
  //     setTimeout(() => {
  //         setName({
  //             "name" : "laterine",
  //             "class": "Lower-Class"
  //         })
  //     }, 1000);
  // }

  ye code use hua tha to explain context
*/

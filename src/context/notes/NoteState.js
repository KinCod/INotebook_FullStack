import { useState } from "react";
import hardNotes from "../../hardNotes.json";
import NoteContext from "./noteContext"; //contezxt vali file mai bas context ko janam dia
//udhar bhi states ko populate kar skte thee but clean rkhna code

const NoteState = (props) => {
  const notesInitial = hardNotes; //these hard notes hum directly isliye use krre so that frontEnd ka kaam kar lein and
  //uske baad phir hum backend se merge krenge isko

  const [notes, setNotes] = useState(notesInitial); //this is used to access and update notes

  //adding a node Func
  const addNote = (title, description, tag) => {
    //todo link to api
    console.log("adding a new node");
    let note = {
      _id: "65cf494c78",
      user: "65cde1a26c835a04a155bda8",
      title: title ,
      description: description ,
      tag: tag ,
      date: "2024-02-16T11:38:52.905Z",
      __v: 0,
    };
    
    setNotes(notes.concat(note));        //notes wale object mai ye new note jo bna hai usko push karna hai and phir as a whole isko set karlo as new node array of objects
  };

  //deleting
    const deleteNote = (id) =>{            //isko note ki id aaega

      //new Notes wala object bna lia jismai vo note exist ni krega jiski id aayi
      const newNotes = notes.filter((note)=>{
        return note._id != id;
      })

      //phir bas isko setNotes krdo and ultimately final notes mai ye exist ni krega
      setNotes(newNotes);

    }

  //alert
      //ye alert will be called when note delete hoga 
      //and vis will be given to home.js and obv vis== true hua tab alert show hojaega
      //we can even set note Title in this alert but abhi zroori ni so we'll see
      const [vis,setVis] = useState({});
      const alert = (id) =>{
        const send = notes.filter((note)=>{
            return note._id == id;
        })
        setVis({vis:true,alert:send[0].title});

        setTimeout(() => {
          setVis({vis:false});
        }, 5000);
      }

  //updating

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote,vis,alert }}>
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

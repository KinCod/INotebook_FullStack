import { useState } from "react";
import NoteContext from "./noteContext";        //contezxt vali file mai bas context ko janam dia 
                                                //udhar bhi states ko populate kar skte thee but clean rkhna code

const NoteState = (props) => {

    const s1 = {
        "name" : "lalla",
        "class" : "V-B"
    }

    const [name,setName] = useState(s1);

    const update = () =>{          //bas set kardega ye new wala object into the state using setName method after 1sec
        setTimeout(() => {
            setName({
                "name" : "laterine",
                "class": "Lower-Class"
            })
        }, 1000);
    }

    return(
        <NoteContext.Provider value= {{name,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

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
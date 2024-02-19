import React,{ useContext, useEffect } from 'react'
import NoteContext from '../context/notes/noteContext'

//toh basically udhar se jis jis tag ko context provide krna uss tag ko wrap kra state mai
//and ab import kra tag k andar context ko

const About = () => {
  const a = useContext(NoteContext);         //using the context (ab in jsx kuch bhi state karlo access)

  useEffect(() => {           //always runs once on page startUP
    a.update();      
  }, [])
  
  return (
    <div className=''>
      {a.name.name } is a GOD in class {a.name.class};
    </div>
  )
}

export default About;


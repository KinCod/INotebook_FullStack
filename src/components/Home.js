import React, { useEffect } from "react";
import Notes from "./Notes";
import Alert from "./Alert";
import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import {  useNavigate } from "react-router-dom";

const Home = () => {
  //​‌‍‌⁡⁢⁣⁣𝗔𝗴𝗮𝗿 𝗧𝗼𝗸𝗲𝗻 𝗵𝗮𝗶⁡​ Tab hi Home mai enter kro Vrna ⁡⁢⁣⁣​‌‍‌𝗣𝗲𝗵𝗹𝗲 𝗹𝗼𝗴𝗶𝗻 𝘆𝗮 𝗦𝗶𝗴𝗻𝘂𝗽​⁡ kro
  const navigate = useNavigate();

  useEffect(()=>{
    
    if(!localStorage.getItem('token')){
    navigate('/')
    }
  })

  const context = useContext(NoteContext);
  const { vis } = context;
  return (
    <>
      {localStorage.getItem('token')

      && 

      <div className="container text-center max-w-full">
        {vis.vis && <Alert message={vis.alert} />}{" "}
        {/* agar vis.vis is true tab alert show kro */}
        <Notes />
      </div>}
      
    </>
  );
};

export default Home;

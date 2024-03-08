import React from "react";
import Notes from "./Notes";
import Alert from "./Alert";
import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const Home = () => {
  const context = useContext(NoteContext);
  const { vis } = context;
  return (
    <>
      <div className="container text-center max-w-full">
        {vis.vis && <Alert message={vis.alert} />}{" "}
        {/* agar vis.vis is true tab alert show kro */}
        <Notes />
      </div>
    </>
  );
};

export default Home;

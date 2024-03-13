import React from "react";
import Notes from "./Notes";

const Home = (props) => {
  return (
    <>
      (
      <div className="container text-center max-w-full">
        <Notes showAlert={props.showAlert} />
      </div>
      )
    </>
  );
};

export default Home;

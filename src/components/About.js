// import React, { useContext, useEffect } from "react";
// import NoteContext from "../context/notes/noteContext";

//toh basically udhar se jis jis tag ko context provide krna uss tag ko wrap kra state mai
//and ab import kra tag k andar context ko

const About = () => {
  return <div className="m-5">
    <h1 className="text-center font-thin mb-4 text-7xl text-blue-800">About INotebook</h1>
    <h2 className="text-4xl font-mono text-cyan-700 mb-3">Welcome to iNotebook</h2>
    <p className="font-thin">At iNotebook, we believe in simplicity and security, allowing you to focus on what truly matters: your notes. Designed with a user-first approach, iNotebook is your personal digital notebook where you can store your thoughts, ideas, and inspirations effortlessly.</p>
    <br /><hr/> <br />
    <h2 className="text-4xl font-mono text-cyan-700 mb-3">Why Choose iNotebook?</h2>
    <ul className="[&>li]:font-thin">
      <li>Seamless Experience: With an intuitive interface, iNotebook makes note-taking a breeze. Say goodbye to cluttered interfaces and hello to streamlined productivity.</li>
      <li>Privacy Protection: Your security is our priority. iNotebook employs robust encryption measures to safeguard your notes, ensuring that they remain confidential and accessible only to you.</li>
      <li>Accessible Anywhere: Whether you're on your laptop, tablet, or smartphone, iNotebook syncs across all your devices, ensuring your notes are always within reach.</li>
    </ul>
    <br /><hr/> <br />
    <h2 className="text-4xl font-mono text-cyan-700 mb-3">Our Mission</h2>
    <p className="font-thin">Our mission at iNotebook is to empower individuals to capture their thoughts effortlessly and securely. We strive to provide a reliable platform that fosters creativity, productivity, and peace of mind.</p>
    <br /><hr/> <br />
    <h2 className="text-4xl font-mono text-cyan-700 mb-3">Get Started Today</h2>
    <p className="font-thin">Join the Lovely users who have already embraced iNotebook as their go-to note-taking solution. Sign up now and experience the simplicity and security of iNotebook for yourself.</p>
    
  </div>;
};

export default About;

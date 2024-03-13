"use client";

import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = (props) => {
  const navigate = useNavigate();
  const host = "http://localhost:5000/";

  //⁡⁢⁣⁣𝗦𝘁𝗼𝗿𝗶𝗻𝗴 𝘁𝗵𝗲 𝘃𝗮𝗹𝘂𝗲𝘀⁡ from form into a ​‌‍‌⁡⁢⁣⁣𝘀𝘁𝗮𝘁𝗲⁡​
  const [logi, setLogi] = useState({ email:"", password:"" }); //store Email and pass in this
  const onChange = (e) => {
    setLogi({ ...logi, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Fetching the api and Sending Login Data to it
    const url = `${host}api/auth/login/`;

    const response = await fetch(url, {
      method: "POST", // *GET, POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: logi.email, password: logi.password }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      //Save the auth Token and redirect to  Dashboard page
      localStorage.setItem("token", json.authToken);
      localStorage.setItem('name', json.name); 
      props.showAlert(json.name + " Logged in Successfully!!","success");

      //go to home page
      navigate(`/`);
    } else {
      props.showAlert(json.error,"failure");
      console.log(json.error);
      //window.alert(json.error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-blue-900 font-bold text-5xl mt-10">Login</h1>
      <form className="flex mt-12 max-w-2xl w-1/3 flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            name="email"
            type="email"
            placeholder="name@flowbite.com"
            required
            onChange={onChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            name="password"
            onChange={onChange}
            type="password"
            required
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <div className="mt-8">Not yet Registered ? <Link to="/signup" className="transition-all duration-200 text-blue-700 font-bold hover:text-rose-600">Click Here</Link></div>
    </div>
  );
};

export default Login;

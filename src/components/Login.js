"use client";

import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";

const Login = () => {
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
      //redirect to notes page
    } else {
      console.log(json.error);
      window.alert(json.error);
    }
  };

  return (
    <div>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
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
    </div>
  );
};

export default Login;

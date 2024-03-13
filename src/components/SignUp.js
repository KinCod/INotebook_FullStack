import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const navigate = useNavigate();
  const host = process.env.REACT_APP_HOST;

  //⁡⁢⁣⁣𝗦𝘁𝗼𝗿𝗶𝗻𝗴 𝘁𝗵𝗲 𝘃𝗮𝗹𝘂𝗲𝘀⁡ from form into a ​‌‍‌⁡⁢⁣⁣𝘀𝘁𝗮𝘁𝗲⁡​
  const [logi, setLogi] = useState({ name: "", email: "", password: "" }); //store Email and pass in this
  const onChange = (e) => {
    setLogi({ ...logi, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Fetching the api and Sending Login Data to it
    const url = `https://i-notebook-back.vercel.app/api/auth/signin/`;

    const response = await fetch(url, {
      method: "POST", // *GET, POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: logi.name[0],
        email: logi.email[0],
        password: logi.password[0],
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      console.log(json.authToken);
      //Save the auth Token and redirect to  Dashboard page
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("name", json.name);
      props.showAlert(json.name + " SignUp was Successful!!", "success");
      //go to home page
      navigate("/");
    } else {
      props.showAlert(json.error, "failure");
      console.log(json.error);
      //window.alert(json.error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-blue-900 font-bold text-5xl mt-16">SignUp</h1>
      <form
        onSubmit={handleSubmit}
        className="flex  mt-10 max-w-2xl w-1/3 flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name1" value="Your Name" />
          </div>
          <TextInput
            id="name1"
            name="name"
            type="text"
            placeholder="name"
            required
            onChange={onChange}
            className="hover:scale-105 transition-all duration-[250ms]"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            name="email"
            placeholder="name@abcd.com"
            required
            onChange={onChange}
            className="hover:scale-105 transition-all duration-[250ms]"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            name="password"
            id="password1"
            type="password"
            placeholder="*********"
            onChange={onChange}
            className="hover:scale-105 transition-all duration-[250ms]"
            required
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <div className="mt-8">
        Already Registered ?{" "}
        <Link
          to="/"
          className="transition-all duration-200 text-blue-700 font-bold hover:text-rose-600"
        >
          Click Here
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

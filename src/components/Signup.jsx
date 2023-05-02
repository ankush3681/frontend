import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = () =>{

    const userDetail = {
        name,email,gender,password
    }
    axios({
        method:"post",
        url:"https://colorful-poncho-mite.cyclic.app/users/register",
        data: userDetail
      }).then((res)=>{
        console.log(res);
        alert("user registered successfull");
      }).catch((err)=>{
        console.log(err)
        alert("Something went wrong")
      });

      setEmail("");
      setPassword("");
      setName("");
      setGender("");
  }


  return (
    <div>
      <h1>signup page</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
       
      </div>
      
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Signup;

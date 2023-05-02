import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const userDetail = {
      email,
      password,
    };
    axios({
      method: "post",
      url: "https://colorful-poncho-mite.cyclic.app/users/login",
      data: userDetail,
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token",res.data.token);
        alert("Login successfull");
      })
      .catch((err)=>{
        console.log(err)
        alert("Wrong Credentials")
      });

      setEmail("");
      setPassword("");
  };

  return (
    <div>
      <h1>Login page</h1>
      <div>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;

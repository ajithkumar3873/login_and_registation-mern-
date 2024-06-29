import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

 

  axios.defaults.withCredentials = true;
  const handelsubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/login', {email,password})
    .then(res =>{
      //alert("created")
      //navigate('/login')
      console.log(res.data);
      console.log(res.data.status);
      console.log(res.data.role);
      if(res.data.status === "ok"){
        if(res.data.role === "admin"){
           
            navigate('/group1')
        }else{
            navigate('/group2')
        }
      }
    }).catch(err => console.log(err))
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Login</h2>
          <form onSubmit={handelsubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                autoComplete="off"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              login
            </button>
          </form>
          <br />
          <p>Don't Have an Account     <Link to="/">register</Link></p>
            
        </div>
      </div>
    </div>
  );
}

export default Login;

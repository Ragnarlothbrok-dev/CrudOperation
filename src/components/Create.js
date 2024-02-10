import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


 const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const header={"Access-Control-Allow-Origin":"*"};
  const history =useNavigate();
  const handlesubmit=(e)=>{
    e.preventDefault();
    axios.post("https://657773a6197926adf62e5623.mockapi.io/crudoperation1",{
    name:name,
    email:email,
    header,
  });
  history("/Read");
 };
  return <> 
  <h2>Create</h2>
  <form>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
  
    <input type="email" className="form-control"onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
</form>
  
  
  
  
  </>
  
 };
export default Create
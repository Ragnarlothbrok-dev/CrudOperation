import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import React from 'react';
import { Link } from 'react-router-dom';


export const Read = () => {
  const [data, setdata] = useState([]);

  function getdata() {
    axios
      .get("https://657773a6197926adf62e5623.mockapi.io/crudoperation1")
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      });
  }
  function deletedata(id){
    axios.delete(`https://657773a6197926adf62e5623.mockapi.io/crudoperation1/${id} `
    ).then(()=>{
    getdata();
  })
  // .catch((error) => {
  //   console.error("Error deleting data:", error);
  // })p
}
const setToLocalStorage=(id,name,email)=>{
  localStorage.setItem("id",id)
  localStorage.setItem("name",name)
  localStorage.setItem("email",email)
}

  useEffect(() => {
    getdata(); 
  }, []); // Removed `data` from the dependency array

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to={"/update"}>
                <button className='btn-success' onClick={()=>setToLocalStorage(
                  eachData.id,
                  eachData.name,
                  eachData.email
                  )}>
                  Edit
                  </button>
                </Link>
                
              </td>
              <td>
                <button className='btn-danger'onClick={()=>deletedata(eachData.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;

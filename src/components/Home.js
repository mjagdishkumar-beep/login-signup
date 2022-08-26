import React, { useState, useEffect } from "react";

const Home = () => {

    const[logindata] = useState([]);

    const Details = () => {
        const getuser = localStorage.getItem("user_login");
    }

    useEffect(() => {
        Details();
    }, [])


  return (
    <div className="mt-3 d-flex justify-content-center">
        <h1>Logged in succesfully</h1>
        <h1>Hi {logindata[0].firstname}</h1>
        <h1>{logindata[0].email} is your mail id</h1>
    </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'


const Home = () => {

    const[logindata] = useState([]);

    const Details = () => {
        const getuser = localStorage.getItem("user_login");
    }

    useEffect(() => {
        Details();
    }, [])


  return (
    <div>
        <h1>User Details</h1>
        <h1>{logindata[0].firstname}</h1>
    </div>
  )
}

export default Home
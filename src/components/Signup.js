import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup = () => {

    const [inputvalue, setinputvalue] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        date: "",
        password: "",
        confirmp: ""
    })
    const[data,setData] = useState([])
    console.log(inputvalue);

    const getdata = (e) => {

        const { value, name } = e.target;

        setinputvalue(() => {
            return {
                ...inputvalue,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();

        const { firstname, lastname, email, phone, date, password, confirmp } = inputvalue;

        if (firstname === "") {
            alert("Required Field")
        } else if (firstname.length > 4) {
            alert("First Name should be less then four characters")
        } else if (lastname === "") {
            alert("Required Field")
        } else if (lastname.length > 4) {
            alert("Last Name should be less then four characters")
        }else if (email === "") {
            alert("Required Field")
        } else if (!email.includes("@")) {
            alert("Not a valid email id")
        } else if (phone === "") {
            alert("Required Field")
        } else if (phone.length < 10) {
            alert("Not a valid Phone Number")
        } else if (phone.length > 10) {
            alert("Not a valid Phone Number")
        }else if (date === "") {
            alert("Required Field")
        } else if (password === "") {
            alert("Required Field")
        } else if (password.length > 4) {
            alert("Password should be less then four characters")
        } else if (confirmp === "") {
            alert("Required Field")
        }else if (!confirmp && password.length) {
             alert("Password doesn't match")
        }else{
            console.log("Thank you for signing up with us");
            alert("Thank you for signing up with us")

            localStorage.setItem("newuser",JSON.stringify([...data,inputvalue]));
        }
}

return (
    <>
        <div className="container mt-3">
            <section>
                <div className="data">
                    <h1>Sign Up</h1>
                    <Form>
                        <Form.Group className="mt-3" controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name='firstname' onChange={getdata} placeholder="Enter First Name" />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name='lastname' onChange={getdata} placeholder="Enter Last Name" />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="formBasicPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" name='phone' onChange={getdata} placeholder="Enter Phone Number" />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="formBasicDate">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" name='date' onChange={getdata} placeholder="Enter Date of Birth" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' onChange={getdata} placeholder="Enter Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name='confirmp' onChange={getdata} placeholder="Confirm Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={addData}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </section>
        </div>
    </>
)
}

export default Signup
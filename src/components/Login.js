import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const history = useNavigate();

    const [inputvalue, setinputvalue] = useState({
        email: "",
        password: ""
    })
    const [data, setData] = useState([])
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

        const getuserAr = localStorage.getItem("newuser");
        console.log(getuserAr);

        const { email, password } = inputvalue;

        if (email === "") {
            alert("Required Field")
        } else if (!email.includes("@")) {
            alert("Not a valid email id")
        } else if (password === "") {
            alert("Required Field")
        } else if (password.length > 4) {
            alert("Password should be less then four characters")
        } else {
            if (getuserAr && getuserAr.length) {
                const userdata = JSON.parse(getuserAr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("Invalid details")
                } else {
                    console.log("User Logged In")

                    localStorage.setItem("user_login", JSON.stringify(getuserAr))

                    history("/home")
                }

            }
        }
    }

    return (
        <>
            <div className="container mt-3">
                <section>
                    <div className="data">
                        <h1>Login</h1>
                        <Form>
                            <Form.Group className="mt-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Enter Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={addData}>
                                Submit
                            </Button>
                        </Form>
                        <p className="mb-3">Forgot Password ?<span><Link to="/Password"> Click Here </Link></span>to reset password</p>
                        <p className="mb-3">New User ?<span><Link to="/Signup"> Click Here </Link></span>to create new account</p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login








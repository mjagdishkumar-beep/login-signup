import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Password = () => {

    const [inputvalue, setinputvalue] = useState({
        email: ""
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

        const { email } = inputvalue;

        if (email === "") {
            alert("Required Field")
        } else if (!email.includes("@")) {
            alert("Not a valid email id")
        }
        {
            localStorage.setItem("newuser",JSON.stringify([...data,inputvalue]));
        }
}

return (
    <>
        <div className="container mt-3">
            <section>
                <div className="data">
                    <h1>Reset Password</h1>
                    <Form>
                        <Form.Group className="mt-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                        </Form.Group>
                        <br></br>
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

export default Password
import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import './CSS/login.css'


import loginpic from './images/login.jpg'



const Login = () => {

    const navigate = useNavigate();


    const checkData = async (e) => {
        e.preventDefault();
        let data = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        try {
            const response = await fetch("http://localhost:7000/user-login", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then(async (res) => {
                let result = await res.json();
                console.log("ressxxxx", result.data)

                if (result.status === "successfully_login") {
                    toast.success("Successfully Login");
                    localStorage.setItem("user_id", JSON.stringify(result.data._id))
                    localStorage.setItem("user_type", JSON.stringify(result.data.user_type))
                    navigate('/list');
                }
                else if(result.status === "Incorrect_password"){
                    toast.error("You entered a wrong password.");
                }
                // else(
                //     toast.error("Entered mail is not exists.")
                // )

            });
        }
        catch(error){
            console.error("Error:", error);
        }
    }

    const gotoRegister = () => {
        navigate('/register');
    }
    return (
        <div className='login'>
            <Container>
                <Row>
                    <Col md={6} className='loginpic'>
                        <img src={loginpic} />
                    </Col>
                    <Col md={6} className='form'>
                        <Form onSubmit={checkData} >
                            <h3>Sign In</h3>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label className='labels'>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label className='labels'>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <p>Forget Password</p>
                        <h6>Not a member?  <span onClick={gotoRegister} style={{ color: 'rgb(35, 69, 145)', cursor: 'pointer' }}>Sign Up</span></h6>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
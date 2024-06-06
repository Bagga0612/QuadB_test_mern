import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';



import './CSS/register.css'

import loginpic from './images/login.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Register = () => {
    const navigate = useNavigate();


    const getFormData =async(e)=>{
        e.preventDefault();
        let data = {
            name: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value
        }        

        try{
            const response = await fetch("http://localhost:7000/user-register", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then(async(res)=>{
                let result = await res.json();
                console.log("ressttt", result)

                if (result.status === "successfully_registered") {
                    toast.success("Successfully Registered");
                    navigate('/');
                }
                // else(result.status === "already_exist") {
                //     toast.error("Email already exist");

                // }           
             })

        }catch(error){
            console.error("Error:", error);
        }
    }

    const gotoLogin = () => {
        navigate(`/`);
    }
    return (
        <div className='register'>
            <Container>
                <Row>
                    <Col md={6} className='loginpic'>
                        <img src={loginpic} />
                    </Col>
                    <Col md={6} className='form'>
                        <Form onSubmit={getFormData} >
                            <h3>Welcome to Family</h3>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label className='labels'>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label className='labels'>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label className='labels'>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required />
                            </Form.Group>

                            <Button variant="primary" type="submit" >
                                Register
                            </Button>

                            <InstagramIcon className='meta' />
                            <InstagramIcon />
                            <FacebookIcon />
                            <TwitterIcon />
                        </Form>
                        <h6>Already member?  <span onClick={gotoLogin} style={{ color: 'rgb(35, 69, 145)', cursor: 'pointer' }}>Sign In</span></h6>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register
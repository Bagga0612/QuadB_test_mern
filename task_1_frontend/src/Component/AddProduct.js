import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Navbar from './Navbar'
import loginpic from './images/login.jpg'


import './CSS/addproduct.css'

const AddProduct = () => {

    const navigate = useNavigate();
    const addData = async (e) => {
        e.preventDefault();
        let data = {
            p_name: e.target[0].value,
            P_size: e.target[1].value,
            p_cloth: e.target[2].value,
            p_price: e.target[3].value
        }

        try {
            const response = await fetch("http://localhost:7000/add-product", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then(async (res) => {
                let result = await res.json();
                console.log("ressttt", result)

                if (result.status === "Product_added") {
                    toast.success("Product added Successfully");
                    navigate('/view');
                }
                // else(result.status === "already_exist") {
                //     toast.error("Email already exist");

                // }           
            })

        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <>
            <Navbar />
            <div className='addproduct'>
                <Container>
                    <Row>
                        <Col md={6} className='loginpic'>
                            <img src={loginpic} />
                        </Col>
                        <Col md={6} className='form'>
                            <Form onSubmit={addData} >
                                <h3>Add new Product...</h3>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='labels'>Product Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter product name" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label className='labels'>Product Size</Form.Label>
                                    <Form.Control type="text" placeholder="Enter product size" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label className='labels'>Product Cloth</Form.Label>
                                    <Form.Control type="text" placeholder="Enter product cloth type" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label className='labels'>Product Price</Form.Label>
                                    <Form.Control type="number" placeholder="Enter product MRP" required />
                                </Form.Group>

                                <Button variant="primary" type="submit" >
                                    ADD to database
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AddProduct
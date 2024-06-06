import React, { useEffect, useState } from 'react'

import './CSS/list.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import productpic from './images/813UIVxLD3L._AC_UY1100_.jpg'
import productpic2 from './images/productPic2.jpg'
import Navbar from './Navbar';

const List = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch('http://localhost:7000')
        const data = await res.json()
        setItems(data.item)
        console.log(data)
    }

    console.log("ttttttt", items[0])



    const gotoDetail = (id) => {
        navigate(`/detail?id=${id}`);
    }
    return (
        <>
            <Navbar />
            <div className='list'>
                <h2 className='head'>List of Product....</h2>
                <Row>
                    {
                        items.map((i) => (
                            <Card style={{ width: '18rem' }} className='card'>
                                <Card.Img className='productPic' variant="top" src={productpic} />
                                <Card.Body>
                                    <Card.Title>{i.product_name}</Card.Title>
                                    <Card.Text>
                                        <b>Price:</b> Rs.{i.product_price}
                                        <br></br>
                                        <b>Size:</b> {i.product_size}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => gotoDetail(i._id)}>View More Detail</Button>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </Row>
            </div>
        </>
    )
}

export default List
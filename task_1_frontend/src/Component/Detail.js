import React, { useEffect, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

import './CSS/detail.css'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import productPic from './images/productPic3.jpg'
import productPic2 from './images/productPic5.jpg'
import productPic3 from './images/productPic4.jpeg'
import Navbar from './Navbar';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Detail = () => {

    const navigate = useNavigate();

    const [detail, setDetail] = useState([]);
    useEffect(() => {
        getProductDetail();
    }, []);

    const getProductDetail = async (e) => {
        let url = new URL(window.location.href);
        let search_params = url.searchParams;
        // setGetId(search_params.get('id'))
        let p_id = { p_id: search_params.get('id') }

        try {
            const response = await fetch("http://localhost:7000/product/getProductDetail", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(p_id),
            }).then(async (res) => {
                let result = await res.json();
                setDetail(result.item)
                console.log("ress", result.item)

            });
        }
        catch (error) {
            console.error("Error:", error);
        }
    }

    const addtoCart = async (id) => {
        let data = {
            u_id: localStorage.getItem("user_id"),
            p_id: id
        }
        try {
            const response = await fetch("http://localhost:7000/add-to-cart", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then(async (res) => {
                let result = await res.json();
                console.log("ressxxxx", result.data)

                if (result.status === "successfully_added") {
                    toast.info("Product is added to cart successfully")
                    navigate(`/list`);
                }
            });

        } catch (error) {
            console.error("Error:", error);
        }

    }



    return (
        <>
            <Navbar />
            <div className='detail'>
                <Row className='m-4'>
                    <Col md={6}>
                        <Carousel fade className='carousel'>
                            <Carousel.Item>
                                <img src={productPic} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={productPic2} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={productPic3} />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={6} className='p-0'>
                        <div className='m-3'>
                            <h2>{detail.product_name}</h2>
                            <h5>This is available in {detail.product_size} size</h5>
                            <p>Cloth type: {detail.product_cloth}</p>
                            <h4>Rs. {detail.product_price}</h4>
                        </div>
                        <div>
                            <Button className='btn w-100 mb-3' onClick={() => addtoCart(detail._id)}>Add to Cart</Button>
                            <Button className='btn w-100 '>Buy Now</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Detail
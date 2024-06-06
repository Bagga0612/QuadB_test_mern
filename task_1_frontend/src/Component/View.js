import React, { useEffect, useState } from 'react'
import { Table, Row, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './CSS/view.css'
import { toast } from 'react-toastify'

const View = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch('http://localhost:7000')
        const data = await res.json()
        setItems(data.item)
        console.log(data)
    }

    const deletedata = async (id) => {
        let data = {
            p_id: id
        }
        try {
            const response = await fetch("http://localhost:7000/delete-data/"+id, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then(async (res) => {
                let result = await res.json();
                console.log("ressxxxx", result)

                if (result.status === "Delete_done") {
                    toast.success("item deleted successfully")
                    navigate(`/addProduct`)
                }

            });
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <Navbar />

            <div className='view'>
                <h2 className='head'>List of Product</h2>
                <Table striped bordered hover size="sm" className='table' >
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Product Name</th>
                            <th>Product Size</th>
                            <th>Product Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((i, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{i.product_name}</td>
                                <td>{i.product_size}</td>
                                <td>{i.product_price}</td>
                                <td className='bttn'><Button className='btn btn-success'>Edit</Button>
                                    <Button className='btn btn-danger' onClick={() => deletedata(i._id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default View
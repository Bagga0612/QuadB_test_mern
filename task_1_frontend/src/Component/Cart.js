import React from 'react'

import './CSS/cart.css'
import { Button, Table } from 'react-bootstrap'
import Navbar from './Navbar'

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className='cart'>
                <h2 className='head'>Shopping Cart</h2>
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
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td><Button>Remove</Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td><Button>Remove</Button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            <td><Button>Remove</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Cart
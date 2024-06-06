import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Login from './Login'
import Register from './Register'
import List from './List'
import Detail from './Detail'
import Cart from './Cart'
import AddProduct from './AddProduct'
import View from './View'

const RouteName = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Login />}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/list' element={<List />} />
            <Route path='/detail' element={<Detail />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/addProduct' element={<AddProduct />} />
            <Route path='/view' element={<View />} />
        </Route>
    </Routes>
    </div>
  )
}

export default RouteName
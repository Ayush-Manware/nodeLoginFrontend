import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../login/Login'
import Register from '../register/Register'

const RoutesCompo = () => {
  return (
    <>
        <Routes>
            <Route path={'/register'} element={<Register />}/>
            <Route path={'/login'} element={<Login />}/>
        </Routes>
    </>
  )
}

export default RoutesCompo
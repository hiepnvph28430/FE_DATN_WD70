import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/footer'
import Header from '../components/header/Header'

const LayoutClient = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default LayoutClient
import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function Layout(props) {
    return (
        <div className='layout'>
            <Header />
            <Main  />
            <Footer />
        </div>
    )
}

export default Layout

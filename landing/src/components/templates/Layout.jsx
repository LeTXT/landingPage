import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function Layout({onSubmit}) {
    return (
        <div className='layout'>
            <Header />
            <Main onSubmit={onSubmit} />
            <Footer />
        </div>
    )
}

export default Layout

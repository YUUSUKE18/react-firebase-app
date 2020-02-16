import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SingedinLinks'
import SignedOutLinks from './SingedoutLinks'

const Navbar = () => {
    return(
        <nav className="nav-wapper grey-text grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Mario Chat</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar
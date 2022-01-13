import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar() {

    const state = useSelector((state) => state.handleCart);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-gradient py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/" style={{fontFamily:"'Pushster', cursive", color:"white"}}>NAMSHOP <i class="fab fa-stumbleupon"></i></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/" style={{color:"white"}}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products" style={{color:"white"}}>Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" style={{color:"white"}}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" style={{color:"white"}}>Contact Us</NavLink>
                            </li>

                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-light mb-2">
                                <i className="fas fa-sign-in-alt me-1"></i>LOGIN</NavLink>
                            <NavLink to="/register" className="btn btn-outline-light ms-2 mb-2">
                                <i className="fas fa-user-plus me-1"></i>REGISTER</NavLink>
                            <NavLink to="/cart" className="btn btn-outline-light ms-2 mb-2">
                                <i className="fa fa-shopping-cart me-1"></i>CART ({state.length})</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

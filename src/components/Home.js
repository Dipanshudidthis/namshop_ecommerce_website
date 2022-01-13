import React from 'react'
import Products from './Products';
import nnn from '../images/nnn.jpg';
import kkkk from '../images/kkkk.jpg';
import ttt from '../images/ttt.jpg';
import ggg from '../images/ggg.jpg';
import { NavLink } from 'react-router-dom';
import './Home.css';


const Home1 = () => {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="hero">
                            <div class="card bg-dark text-white border-0">
                                <img src={ttt} class="card-img img-fluid" alt="model" height='645px' />
                                <div class="card-img-overlay d-flex flex-column justify-content-center">
                                    <div className="container"> <br /><br /><br />
                                        <div className="buttons">
                                            <NavLink to="/products" className="btn btn-outline-dark">
                                            <i class="fas fa-shopping-bag"></i> SHOP NOW</NavLink>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">
                    <div className="hero">
                            <div class="card bg-dark text-white border-0">
                            <img src={ggg} class="d-block w-100 img-fluid" alt="IPhone" height="500px" />
                                <div class="card-img-overlay d-flex flex-column justify-content-center">
                                    <div className="container">
                                        <p class="card-text lead fw-bold text-dark checkou" style={{fontFamily:"'Dongle', sans-serif"}}>BUY FORMALS!!</p>
                                        <div className="buttons">
                                            <NavLink to="/products" className="btn btn-outline-dark">
                                            <i class="fas fa-shopping-bag"></i> SHOP HERE</NavLink>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="carousel-item">
                    <div className="hero">
                            <div class="card bg-dark text-white border-0">
                            <img src={nnn} class="d-block w-100 img-fluid" alt="IPhone" height="500px" />
                                <div class="card-img-overlay d-flex flex-column justify-content-center">
                                    <div className="container">
                                        <p class="card-text lead fw-bold text-dark checkou" style={{fontFamily:"'Dongle', sans-serif"}} >CHECK OUT CASUALS FOR GIRLS!</p>
                                        <div className="buttons">
                                            <NavLink to="/products" className="btn btn-outline-dark">
                                            <i class="fas fa-shopping-bag"></i> SHOP HERE</NavLink>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="carousel-item">
                    <div className="hero">
                            <div class="card bg-dark text-white border-0">
                            <img src={kkkk} class="d-block w-100 img-fluid" alt="IPhone" height="500px" />
                                <div class="card-img-overlay d-flex flex-column justify-content-center">
                                    <div className="container">
                                        
                                        <div className="buttons">
                                            <NavLink to="/products" className="btn btn-outline-light">
                                            <i class="fas fa-shopping-bag"></i> SHOP HERE</NavLink>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Products />
        </>
    )
}

export default Home1
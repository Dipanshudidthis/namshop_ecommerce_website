import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

function Products() {

 
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let compoundMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (compoundMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                compoundMounted = false;
            }
        }
        getProducts();

    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }

    const filterProduct =(cat) =>{
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons justify-content-center mb-5 pb-5" data-aos='fade-left'>
                    <button className="btn btn-outline-dark me-2 mb-2" onClick={()=>setFilter(data)}>All Products</button>
                    <button className="btn btn-outline-dark me-2 mb-2" onClick={()=>filterProduct("men's clothing")}>For Him!</button>
                    <button className="btn btn-outline-dark me-2 mb-2" onClick={()=>filterProduct("women's clothing")}>For Her!</button>
                    <button className="btn btn-outline-dark me-2 mb-2" onClick={()=>filterProduct("jewelery")}>Jewellery</button>
                    <button className="btn btn-outline-dark me-2 mb-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4">
                                    <img src={product.image} class="card-img-top" alt={product.title} height='250px' />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p class="card-text lead fw-bold">${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} class="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }


    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center' style={{fontFamily:"'Dongle', sans-serif"}}>LATEST ARRIVALS IN OUR SHOP!!!</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    )
}

export default Products

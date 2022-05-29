import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigarion.css';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="nav-bg">
                <nav className="navbar navbar-expand-lg navbar-dark container">

                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">

                            <span className="navbar-toggler-icon nav-span"></span>

                        </button>

                        <div className="text-md-start">
                            <Link to="/"><img className='navImg' src={"https://i.ibb.co/0tgMmY7/sport-car.png"} alt="" /></Link>

                        </div>
                        <div className=" collapse navbar-collapse text-md-start" id="navbarText">
                            <div className="navbar-nav me-auto mb-2 mb-lg-0">
                                <Link className="nav-item my-nav mt-4 mt-lg-0 mb-2 mb-md-0" to="/home">Home</Link>
                                <Link className="nav-item my-nav mb-2 mb-md-0" to="/cars">Parts</Link>
                                <Link className="nav-item my-nav mb-2 mb-md-0" to="/sidebar">Dashboard</Link>
                                <Link className="nav-item my-nav" to="/about">About</Link>
                                <Link className="nav-item my-nav" to="/contact">Contact</Link>
                                <Link className="nav-item my-nav" to="/blogs">Blogs</Link>

                                <a className="nav-item my-nav" aria-current="page" href="https://sajidur10.github.io/portfolio/">Portfolio</a>

                            </div>

                            <span className="navbar-text">

                                {user.email ?
                                    <><i className="fas fa-user-circle me-2 text-light"></i><span className="text-light">{user.displayName} </span> <button onClick={logOut} className=" mt-4 mt-lg-0 nav-btn me-2">Log out</button>
                                    </> :
                                    <Link to="/login"><button className="nav-btn  mt-4 mt-lg-0">Log In</button></Link>
                                }
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;
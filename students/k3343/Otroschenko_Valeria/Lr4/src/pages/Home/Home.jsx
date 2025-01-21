import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home-left">
                <h1>Welcome</h1>
                <h2>Medical Clinic that You Can Trust</h2>
                <p>Providing the best healthcare services for you and your family.</p>
                <div className="buttons">
                    <Link to="/services" className="btn btn-info">Services</Link>
                    <button className="btn-info">More Info</button>
                </div>
            </div>
        </div>
    );
};

export default Home;

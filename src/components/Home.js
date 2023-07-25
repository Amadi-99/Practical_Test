import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <h2 className="welcome-text">Welcome to Employee Management System</h2>
            <Link to="/employees" className="link-button">
                <button className="login-button">Login</button>
            </Link>
        </div>
    );
};

export default HomePage;


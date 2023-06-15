import React from 'react';
import Navbar from './Navbar';
import background from '../Assets/background.png';
// import './App.css';
import '/home/surbhimotwani/task_surbhi/src/App.css';


const Home = () => {
  return (
    <div>
      <div className='home-container'>
        <Navbar />
        <div className="Home-banner-container">
          <div className="Home-banner-Image-container">
            <img src={background} alt="" />
          </div>   
          <div className="Home-banner">
            {/* Add content or components within the "Home-banner" div */}
          </div>
        </div>
      </div>
      <div className="App">
        <div className="Polygon-1"></div>
        <span className="TeamFlow">
          TeamFlow
        </span>
        <span className="Product">
          Product
        </span>
        <span className="Enterprise">
          Enterprise
        </span>
        <span className="Pricing">
          Pricing
        </span>
        <span className="Login">
          Login
        </span>
        <div className="Rectangle-2"></div>

        <span className="Sign-Up">
          Sign Up
        </span>
        <div className="Rectangle-20"></div>
        <span className="-Welcome-to-TeamFlow">
          👋 Welcome to TeamFlow
        </span>
        <span className="Work-the-way-that-works-for-you">
          Work the way that works for you
        </span>
        <div className="Line-2"></div>
        <span className="Create-Build-Collaborate-and-ship-products-very-faster">
          Create, Build, Collaborate, and ship products very faster
        </span>
        <div className="Rectangle-4"></div>
        <div className="Ellipse-3"></div>
        <span className="Update-Contract-Agreement">
          Update Contract Agreement
        </span>
        <span className="Mark-Anderson">
          Mark Anderson
        </span>
        <img src="hulu.png/Assets" alt="Hulu" className="Hulu" />
        <img src="bbc.png./Assets" alt="BBC" className="BBC" />
        <img src="Universal.png./Assets" alt="Universal" className="Universal" />
        <img src="Adobe.png./Assets" alt="Adobe" className="Adobe" />
        <span className="See-why-over-100000-teams-choose-TeamFlowcom">
          See why over 100,000 teams choose TeamFlow.com
        </span>
        <div className="Rectangle-36"></div>
      </div>
    </div>
  );
};

export default Home;

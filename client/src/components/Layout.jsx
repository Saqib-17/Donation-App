import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import Modal from './Modal';

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="lexend-font w-full">
      {/* Navbar */}
      <header className="sticky top-0 z-10">
        <nav id="navbar">
          <div className="navbar px-16 py-6 bg-secondary-color">
            <div className="navbar-start">
              <button
                onClick={() => navigate('/blog')}
                className="btn btn-ghost text-xl font-semibold bg-secondary-color lg:px-10"
              >
                Blog
              </button>
            </div>
            <div className="navbar-center hidden lg:flex">
              <div className="logo-title-container">
                <img src={logo} alt="logo" className="logo-img" />
                <span className="site-title">Donate Bangladesh</span>
              </div>
            </div>
            <div className="navbar-end">
              <a id="cash-out-btn" className="btn text-xl font-semibold text-dark-3 lg:px-10">
                5500 BDT
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Action Buttons */}
      <div id="action-btn" className="flex justify-center space-x-4 sticky mx-auto w-full z-40 top-16 bg-secondary-color py-4">
        <button
          onClick={() => navigate('/')}
          className="btn btn-lg text-xl font-semibold px-10"
        >
          Donate Now
        </button>
        <button
          onClick={() => navigate('/history')}
          className="btn btn-lg text-xl font-semibold px-10"
        >
          History
        </button>
      </div>

      {/* Main Page Content */}
      <main className="my-20 lg:px-16 relative w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <div className="bg-base-100 bg-secondary-color" />
        <p>saqib@eastdeltauniversity</p>
      </footer>

      {/* Modal Component */}
      <Modal />
    </div>
  );
};

export default Layout;

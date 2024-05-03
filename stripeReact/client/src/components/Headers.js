import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import './Headers.css'; // Create a CSS file to add custom styling

const Headers = () => {
  const { carts } = useSelector((state) => state.allCart);

  return (
    <Navbar style={{ height: "60px", background: "black", color: "white" }}>
      <Container className="d-flex justify-content-between align-items-center">
        <NavLink to="/" className="text-decoration-none text-light">
          <h3 className='text-light'>AGRO FUSION SHOP</h3>
        </NavLink>
        <div className="d-flex align-items-center">
          <NavLink to="http://127.0.0.1:5000/" className="mr-3">
            <Button variant="light">Back to AGRO FUSION</Button>
          </NavLink>
          <NavLink to="/cart" className="text-decoration-none text-light position-relative">
            <div id='ex4'>
              <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                <i class="fa-solid fa-cart-shopping"></i>
              </span>
            </div>
          </NavLink>
        </div>
      </Container>
    </Navbar>
  )
}

export default Headers;

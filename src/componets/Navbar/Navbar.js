import React, { useState, useRef, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import CustomerArea from './CustomerArea';
import AboutUs from './AboutUs';


function NavbarPage() {
  const [isSearchFormVisible, setSearchFormVisibility] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [hiddenCustomer, setHiddenCustomer] = useState(false);
  const [hiddenAboutUs, setHiddenAboutUs] = useState(false);
  const toggleSearchForm = () => {
    setSearchFormVisibility(!isSearchFormVisible);
  };
  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      console.log('Đang tìm kiếm:', searchQuery);
      navigate(`/Search?model=${encodeURIComponent(searchQuery)}`);
    } else {
      setSearchFormVisibility(false);
    }
  };

  const toggleHiddenCustomer = () => {
    setHiddenCustomer(!hiddenCustomer);
    setHiddenAboutUs(false); 
  };
  const toggleHiddenAboutUs = () => {
    setHiddenAboutUs(!hiddenAboutUs);
    setHiddenCustomer(false); 
  };
  

  return (
    <Navbar expand="lg" className="bg-body-tertiary-white mt-2 mb-2 px-5" id='#'>
      <Container fluid>
        <Link to="/" className="nav-link">
          <svg height="27" width="70" xmlns="http://www.w3.org/2000/svg">
            <path d="M56.927 0a11.798 11.798 0 00-7.495 2.671A11.906 11.906 0 0041.9 0a11.719 11.719 0 00-7.494 2.671C32.347 1.006 29.745 0 26.91 0a11.798 11.798 0 00-7.494 2.671C17.358 1.006 14.756 0 11.92 0 5.32 0 0 5.303 0 11.884c0 6.58 5.32 11.884 11.921 11.884 2.835 0 5.475-1.007 7.495-2.671 2.058 1.664 4.66 2.67 7.494 2.67 2.835 0 5.475-1.006 7.495-2.67a11.906 11.906 0 007.533 2.67c2.874 0 5.475-1.006 7.533-2.67 2.058 1.664 4.66 2.67 7.495 2.67 6.601 0 11.921-5.302 11.921-11.883C68.848 5.342 63.528 0 56.927 0zm-7.495 17.226a9.126 9.126 0 01-1.708-5.342c0-1.974.621-3.832 1.708-5.342a9.126 9.126 0 011.709 5.342c0 2.013-.66 3.832-1.709 5.342zm-15.027 0a9.126 9.126 0 01-1.709-5.342c0-1.974.621-3.832 1.709-5.342a9.126 9.126 0 011.708 5.342c0 2.013-.66 3.832-1.708 5.342zm-15.028 0a9.126 9.126 0 01-1.709-5.342c0-1.974.622-3.832 1.709-5.342a9.126 9.126 0 011.708 5.342c0 2.013-.66 3.832-1.708 5.342zM2.602 11.884c0-5.071 4.116-9.213 9.242-9.213a9.22 9.22 0 015.63 1.897c-1.592 2.013-2.524 4.529-2.524 7.316 0 2.748.932 5.303 2.524 7.316-1.553 1.2-3.495 1.897-5.63 1.897-5.087 0-9.242-4.103-9.242-9.213zM21.24 19.2c1.592-2.013 2.524-4.529 2.524-7.316 0-2.749-.932-5.303-2.524-7.316 1.553-1.2 3.495-1.897 5.63-1.897 2.136 0 4.078.697 5.63 1.897-1.591 2.013-2.523 4.529-2.523 7.316 0 2.748.932 5.303 2.524 7.316-1.553 1.2-3.495 1.897-5.63 1.897-2.136 0-4.078-.697-5.631-1.897zm15.028 0c1.592-2.013 2.524-4.529 2.524-7.316 0-2.749-.932-5.303-2.524-7.316 1.553-1.2 3.494-1.897 5.63-1.897a9.22 9.22 0 015.63 1.897c-1.591 2.013-2.523 4.529-2.523 7.316 0 2.748.932 5.303 2.524 7.316-1.554 1.2-3.495 1.897-5.63 1.897a9.22 9.22 0 01-5.631-1.897zm20.658 1.897a9.22 9.22 0 01-5.63-1.897c1.591-2.013 2.523-4.529 2.523-7.316 0-2.749-.932-5.303-2.524-7.316 1.554-1.2 3.495-1.897 5.63-1.897 5.088 0 9.243 4.103 9.243 9.213 0 5.11-4.155 9.213-9.242 9.213z" fill="#000" fill-rule="evenodd"></path>
          </svg>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 fs-5 d-flex " style={{ maxHeight: '100px', alignItems: 'center' }} navbarScroll>
            <Link to="/All-Models" className="nav-link">
              All Models
            </Link>
            <Link className="nav-link" onClick={toggleHiddenCustomer} >
              Customer Area
              {hiddenCustomer && (
                <div className="Hidden-Customer">
                  {/* <CustomerArea/> */}
                </div>
              )}
            </Link>
            <Link to="/New&Event" className="nav-link"> 
              News & Events
            </Link>
            <Link className="nav-link" onClick={toggleHiddenAboutUs}>
              About us
              {hiddenAboutUs && (
                <div className="Hidden-AboutUs">
                  {/* <AboutUs/> */}
                </div>
              )}
            </Link>
          </Nav>
          {isSearchFormVisible ? (
            <Form className="d-flex" style={{ backgroundColor: 'transparent' }}>
              <Form.Control
                type="search"
                placeholder="Car Model"
                className="me-2 fs-6"
                aria-label="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-light" className="text-dark fs-6" onClick={handleSearch}>
                search
              </Button>
            </Form>
          ) : (
            <Button variant="outline-light" className="text-dark fs-5" onClick={toggleSearchForm}>
              <i className="ri-search-line"></i>
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;

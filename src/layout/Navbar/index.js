import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, fetchSearchResults } from '../../actions';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// MAY HAVE A PROBLEM WITH IS LOGGED IN AS ACTION HAS CHANGED

const NavigationBar = () => {
  const [userLocation, setUserLocation] = useState('');
  const [category, setCategory] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  let history = useHistory();

  const updateUserLocation = (e) => {
    const input = e.target.value;
    setUserLocation(input);
    console.log('updated location');
  };

  const updateCategory = (e) => {
    const input = e.target.value;
    setCategory(input);
  };

  const redirect = () => {
    history.push('/search-results');
    console.log('redirect attempt');
  };

  const handleNavbar = () => {
    localStorage.removeItem('token');
    dispatch(logoutUser());
  };

  const handleSubmit = (e) => {
    console.log('Submitting');
    e.preventDefault();
    dispatch(fetchSearchResults(userLocation, category));
    redirect();
    setUserLocation('');
    setCategory('');
  };

  return (
    <div className="navbar">
      {/* Add form validation */}
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Enter London area"
              className="mr-2"
              aria-label="Search"
              value={userLocation}
              onChange={updateUserLocation}
              required
            />
            <Form.Select aria-label="Default select example" value={category} onChange={updateCategory} required>
              <option>Category</option>
              <option value="Dining">Dining</option>
              <option value="ALL">All Events</option>
              <option value="FEST">Festivals</option>
              <option value="LIVE">Live Music</option>
              <option value="CLUB">Clubbing/Dance Music</option>
              <option value="DATE">Dating Event</option>
              <option value="THEATRE">Theatre/ Dance</option>
              <option value="COMEDY">Comedy</option>
              <option value="EXHIB">Exhibitions and Attractions</option>
              <option value="BARPUB">Bar/ Pub Events</option>
              <option value="LGB">LGBTQ+ Events</option>
              <option value="SPORT">Sporting Events</option>
              <option value="ARTS">The Arts</option>
            </Form.Select>
            <Button variant="outline-success" onClick={handleSubmit}>
              Search
            </Button>
          </Form>
          <Navbar.Brand href="/">Vibe</Navbar.Brand>
          <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/recommendations">Latest Recommendations</Nav.Link>
            {isLoggedIn ? (
              <>
                <Nav.Link href="/account">Account</Nav.Link>
                <Nav.Link href="/" onClick={handleNavbar}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

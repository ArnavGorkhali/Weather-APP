import './App.css';
import React, { useState, useEffect } from "react";
import Temp from './components/Temp'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Switch } from '@mui/material';



function App() {
  

  return (
    <div>
      {/* <React.Fragment>
      {forecast?.map(pd => <div class="card" key={pd.id}> */}
      <Navbar bg='dark' expand="lg" >
        <Container fluid>
            <Nav
              className="me-auto my-2 my-lg-0 navbar-nav navbar-dark"
              style={{ maxHeight: '100px' }}
            >
              {/* <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link> */}
              <ul>
                <li><Nav.Link href="#">Home </Nav.Link></li>
                <li><Nav.Link href="#">News </Nav.Link></li>
                <li><Nav.Link href="#">Contact </Nav.Link></li>
                <li><Nav.Link href="#">About </Nav.Link></li>
              </ul>
            </Nav>
        </Container>
      </Navbar>
      <div>
        <Switch />
        <div>   
          <Temp />
      </div>
    </div>
    </div>
  );
}

export default App;

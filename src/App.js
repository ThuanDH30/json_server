import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import EventList from "./Componets/EventList";
import HomePageBody from "./Componets/HomePageBody";
import FormComponent from "./Componets/FormComponent";

function App() {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">The Good Meat</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/news">News</Nav.Link>
                            <Nav.Link as={NavLink} to="/quiz">Quiz</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<HomePageBody />} />
                <Route path="/about" element={null} />
                <Route path="/news" element={<EventList />} />
                <Route path="/quiz" element={null} />
                <Route path="/contact" element={<FormComponent/>} />

            </Routes>
        </Router>

    );
}


export default App;

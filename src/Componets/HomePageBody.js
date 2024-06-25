import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import background from '../image/BackGR.jpg';
import bo from '../image/bo.jpg';
import mi from '../image/mi.jpg'
import pizza from '../image/pizza.jpg';
import thittuoi from '../image/thittuong.jpg';
import traicay from '../image/traicay.jpg';
import tra from '../image/tra.jpg';
import '../App.css';

const HomePageBody = () => {
    return (
        <Container fluid className="p-0">
            <Row>
                <Image
                    src={background}
                    className="custom-background"
                />
            </Row>
            <Row className="text-center">
                <Col xs={6} md={2}>
                    <Image src={bo} roundedCircle fluid />
                </Col>
                <Col xs={6} md={2}>
                    <Image src={mi} roundedCircle fluid />
                </Col>
                <Col xs={6} md={2}>
                    <Image src={pizza} roundedCircle fluid />
                </Col>
                <Col xs={6} md={2}>
                    <Image src={thittuoi} roundedCircle fluid />
                </Col>
                <Col xs={6} md={2}>
                    <Image src={traicay} roundedCircle fluid />
                </Col>
                <Col xs={6} md={2}>
                    <Image src={tra} roundedCircle fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePageBody;

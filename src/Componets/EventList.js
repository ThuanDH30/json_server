import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import '../App.css';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newEventData, setNewEventData] = useState({
        id: '',
        title: '',
        description: '',
        images: ''
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:3001/events');
            setEvents(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching events:', error);
            setError('Failed to fetch data');
            setLoading(false);
        }
    };

    const createEvent = async () => {
        try {
            const response = await axios.post('http://localhost:3001/events', newEventData);
            setEvents([...events, response.data]);
            setNewEventData({ id: '', title: '', description: '', images: '' });
        } catch (error) {
            console.error('Error creating event:', error);
            setError('Failed to create event');
        }
    };

    const deleteEvent = async (idToDelete) => {
        try {
            await axios.delete(`http://localhost:3001/events/${idToDelete}`);
            const updatedEvents = events.filter(event => event.id !== idToDelete);
            setEvents(updatedEvents);
        } catch (error) {
            console.error('Error deleting event:', error);
            setError('Failed to delete event');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEventData({
            ...newEventData,
            [name]: value
        });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Event List</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {events.map(event => (
                    <Col key={event.id}>
                        <Card className="event-card">
                            <Card.Body>
                                <Card.Title>{event.title}</Card.Title>
                                <Card.Text>{event.description}</Card.Text>
                                <Card.Img variant="top" src={event.images} alt={event.title} className="event-image" />
                                <Button variant="danger" onClick={() => deleteEvent(event.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <h2>Add New Event</h2>
            <Form>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={newEventData.title} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={newEventData.description} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="images">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name="images" value={newEventData.images} onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" onClick={createEvent}>Add Event</Button>
            </Form>
        </div>
    );
};

export default EventList;

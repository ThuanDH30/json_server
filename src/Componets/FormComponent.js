import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        terms: false,
    });

    const [submittedData, setSubmittedData] = useState(null);
    const [errors, setErrors] = useState({});

    const validateUsername = (username) => {
        const regex = /^[a-zA-Z0-9]+$/; // Only letters and numbers
        return regex.test(username);
    };

    const validateZip = (zip) => {
        const regex = /^\d{5}$/; // Exactly 5 digits
        return regex.test(zip);
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'Please provide a valid first name.';
        if (!formData.lastName.trim()) newErrors.lastName = 'Please provide a valid last name.';
        if (!formData.username.trim() || !validateUsername(formData.username)) newErrors.username = 'Username must be a string without spaces or Vietnamese diacritics.';
        if (!formData.city.trim()) newErrors.city = 'Please provide a valid city.';
        if (!formData.state.trim()) newErrors.state = 'Please provide a valid state.';
        if (!formData.zip.trim() || !validateZip(formData.zip)) newErrors.zip = 'Zip code must be exactly 5 digits.';
        if (!formData.terms) newErrors.terms = 'You must agree before submitting.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            setSubmittedData(formData);
            alert('Form submitted successfully!');
        }
    };

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <div>
            <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group controlId="formUsername" className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.username}
                    </Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            isInvalid={!!errors.city}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.city}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formState">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            isInvalid={!!errors.state}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.state}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                            isInvalid={!!errors.zip}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.zip}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group controlId="formTerms" className="mb-3">
                    <Form.Check
                        type="checkbox"
                        name="terms"
                        label="Agree to terms and conditions"
                        checked={formData.terms}
                        onChange={handleChange}
                        isInvalid={!!errors.terms}
                        feedback={errors.terms}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit form
                </Button>
            </Form>

            {submittedData && (
                <div className="mt-4">
                    <h3>Submitted Data</h3>
                    <p><strong>First Name:</strong> {submittedData.firstName}</p>
                    <p><strong>Last Name:</strong> {submittedData.lastName}</p>
                    <p><strong>Username:</strong> {submittedData.username}</p>
                    <p><strong>City:</strong> {submittedData.city}</p>
                    <p><strong>State:</strong> {submittedData.state}</p>
                    <p><strong>Zip:</strong> {submittedData.zip}</p>
                    <p><strong>Terms:</strong> {submittedData.terms ? 'Accepted' : 'Not accepted'}</p>
                </div>
            )}
        </div>
    );
};

export default FormComponent;

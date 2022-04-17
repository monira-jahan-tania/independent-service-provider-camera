import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div>
            <Form className='container mx-auto mt-5 w-50'>
                <h1 className='text-secondary text-center'>Please Log in</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Emter your password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Login
                </Button>
            </Form>

            <p>New ti genius car??? <Link to='/register' className='text-danger pe-auto text-decoration-none'>Please Register.</Link></p>
        </div>
    );
};

export default Login;
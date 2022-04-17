import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();

    const [sendPasswordResetEmail, sending, errorForReset] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>
    }


    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('sent email');
        }
        else {
            toast("please enter your email");
        }
    }

    const navigateRegister = (event) => {
        navigate('/register');
    }
    return (
        <div>
            <Form className='container mx-auto mt-5 w-50' onSubmit={handleSubmit}>
                <h1 className='text-secondary text-center'>Please Log in</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Emter your password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                </Form.Group>

                <Button variant="secondary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to Happy Clicking??? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register.</Link></p>

            <p>Forget Password??? <button className=' btn btn-link text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <ToastContainer />
        </div>
    );
};

export default Login;
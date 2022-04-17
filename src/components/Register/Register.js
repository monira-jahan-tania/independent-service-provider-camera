import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [agree, setAgree] = useState(false);

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        navigate('/home');
    }


    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }
    return (
        <div className='register-form'>
            <h1 className='text-center text-secondary mt-5'>please register first!!!!!!!!</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Enter Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'text-primary ps-2' : 'text-danger ps-2'} htmlFor="terms">Accept terms and conditions</label>
                <input
                    disabled={!agree}
                    className='btn btn-secondary w-50 mx-auto d-block' type="submit"
                    value="Register" />

            </form>
            <p>Already ahve one??? <Link to='/login' className='text-danger pe-auto text-decoration-none ' onClick={navigateLogin}>Please Login.</Link></p>
        </div>
    );
};

export default Register;
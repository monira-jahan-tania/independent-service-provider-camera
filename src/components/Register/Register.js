import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='register-form'>
            <h1 className='text-center text-secondary mt-5'>please register first!!!!!!!!</h1>
            <form>
                <input type="text" name="name" id="" placeholder='Enter Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='password' required />
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accept terms and conditions</label>
                <input

                    className='btn btn-secondary w-50 mx-auto d-block' type="submit"
                    value="Register" />

            </form>
            <p>Already ahve one??? <Link to='/login' className='text-danger pe-auto text-decoration-none'>Please Login.</Link></p>
        </div>
    );
};

export default Register;
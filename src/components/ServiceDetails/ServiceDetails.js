import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    return (
        <div className='container text-center mt-5 pt-5'>
            <h1>You have selected Our Package no: {serviceId}</h1>
            <Link to='/checkout'>
                <button className='btn btn-secondary'>Proceed to checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;
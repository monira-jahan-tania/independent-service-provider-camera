import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>welcome to details: {serviceId}</h1>
            <Link to='/checkout'>
                <button className='btn btn-secondary'>Proceed to checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;
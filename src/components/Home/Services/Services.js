import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';




const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div id='services' className='container'>
            <h1 className='services-title mt-5'>Services</h1>
            <div style={{ height: "2px" }} className='bg-secondary w-2'></div>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            _id:1,
            name : 'Fluoride Treatment',
            description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, assumenda.',
            img:fluoride,
        },
        {
            _id:2,
            name : 'Cavity Treatment',
            description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, assumenda.',
            img:cavity,
        },
        {
            _id:3,
            name : 'Whitening Treatment',
            description :'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, assumenda.',
            img:whitening,
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center '>
            <h3 className='text-primary text-xl font-bold'>Our Services</h3>
            <h1 className='text-4xl font-bold' >Services We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;
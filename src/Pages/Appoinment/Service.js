import React from 'react';

const Service = ({service , setTreatment}) => {
    const {name, slots} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>
                {
                    slots.length ? <span>{slots[0]}</span>  : <span className='text-red-500'>No Slot Avaliable</span>
                }
            </p>
            <p>{slots.length}{slots.length > 1 ? 'spaces' : 'space'} Spaces Lenghth</p>
            <div className="card-actions">
            <label for="booking-modal" disabled={slots.length === 0} 
            onClick={() => setTreatment (service)} className="btn btn-primary">Booking Now</label>

            </div>
        </div>
        </div>
    );
};

export default Service;
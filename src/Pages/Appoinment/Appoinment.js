import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailaleAppoinments from './AvailaleAppoinments';

const Appoinment = () => {
    const [date, setDate] = useState (new Date());
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailaleAppoinments date={date}></AvailaleAppoinments>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;
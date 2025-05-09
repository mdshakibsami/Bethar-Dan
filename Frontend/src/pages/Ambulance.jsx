import React from 'react';
import AmbulanceBanner from '../components/Ambulance/AmbulanceBanner';
import ListAmbulances from '../components/Ambulance/ListAmbulances';

const Ambulance = () => {
    return (
        <div>
            <AmbulanceBanner></AmbulanceBanner>
            <ListAmbulances></ListAmbulances>
        </div>
    );
};

export default Ambulance;
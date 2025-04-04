import React from 'react';
import QrCodeGenerator from '../components/QrCodeGenerator';
import PlantInfo from '../components/PlantInfo';

const PlantPage = ({ plant }) => {
    return (
        <div className="plant-page">
            <PlantInfo plant={plant} />
            <QrCodeGenerator value={plant.qrCodeValue} />
        </div>
    );
};

export default PlantPage;
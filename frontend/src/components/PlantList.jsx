import React from 'react';
import PlantCard from './PlantCard';
import './PlantList.css';

const PlantList = ({ plants, onDelete, onStockToggle }) => {
  if (!plants || plants.length === 0) {
    return (
      <div className="plant-list-empty">
        <p>No plants available.</p>
      </div>
    );
  }

  return (
    <div className="plant-list">
      {plants.map(plant => (
        <PlantCard
          key={plant._id}
          plant={plant}
          onDelete={onDelete}
          onStockToggle={onStockToggle}
        />
      ))}
    </div>
  );
};

export default PlantList; 
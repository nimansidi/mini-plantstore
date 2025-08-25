import React from 'react';
import { Trash2, Edit, Package, Droplets, Sun, Heart } from 'lucide-react';
import './PlantCard.css';

const PlantCard = ({ plant, onDelete, onStockToggle }) => {
  const {
    _id,
    name,
    price,
    categories,
    stockAvailable,
    description,
    imageUrl,
    careLevel,
    waterNeeds,
    lightNeeds
  } = plant;

  const getCareLevelColor = (level) => {
    switch (level) {
      case 'Easy': return '#10b981';
      case 'Medium': return '#f59e0b';
      case 'Hard': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getWaterNeedsIcon = (needs) => {
    switch (needs) {
      case 'Low': return <Droplets size={16} className="water-icon low" />;
      case 'Medium': return <Droplets size={16} className="water-icon medium" />;
      case 'High': return <Droplets size={16} className="water-icon high" />;
      default: return <Droplets size={16} className="water-icon" />;
    }
  };

  const getLightNeedsIcon = (needs) => {
    switch (needs) {
      case 'Low Light': return <Sun size={16} className="light-icon low" />;
      case 'Indirect Light': return <Sun size={16} className="light-icon medium" />;
      case 'Bright Light': return <Sun size={16} className="light-icon high" />;
      case 'Full Sun': return <Sun size={16} className="light-icon full" />;
      default: return <Sun size={16} className="light-icon" />;
    }
  };

  return (
    <div className={`plant-card ${!stockAvailable ? 'out-of-stock' : ''}`}>
      <div className="plant-image">
        <img src={imageUrl} alt={name} />
        {!stockAvailable && (
          <div className="out-of-stock-badge">Out of Stock</div>
        )}
      </div>

      <div className="plant-info">
        <div className="plant-header">
          <h3 className="plant-name">{name}</h3>
          <div className="plant-price">₹{price}</div>
        </div>

        {description && (
          <p className="plant-description">{description}</p>
        )}

        <div className="plant-categories">
          {categories.map((category, index) => (
            <span key={index} className="category-tag">
              {category}
            </span>
          ))}
        </div>

        <div className="plant-care-info">
          <div className="care-item">
            <span className="care-label">Care Level:</span>
            <span 
              className="care-value"
              style={{ color: getCareLevelColor(careLevel) }}
            >
              {careLevel}
            </span>
          </div>
          
          <div className="care-item">
            <span className="care-label">Water:</span>
            <div className="care-icons">
              {getWaterNeedsIcon(waterNeeds)}
              <span>{waterNeeds}</span>
            </div>
          </div>
          
          <div className="care-item">
            <span className="care-label">Light:</span>
            <div className="care-icons">
              {getLightNeedsIcon(lightNeeds)}
              <span>{lightNeeds}</span>
            </div>
          </div>
        </div>

        <div className="plant-actions">
          <button
            onClick={() => onStockToggle(_id, stockAvailable)}
            className={`stock-toggle-btn ${stockAvailable ? 'in-stock' : 'out-of-stock'}`}
            title={stockAvailable ? 'Mark as out of stock' : 'Mark as in stock'}
          >
            <Package size={16} />
            {stockAvailable ? 'In Stock' : 'Out of Stock'}
          </button>
          
          <button
            onClick={() => onDelete(_id)}
            className="delete-btn"
            title="Delete plant"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard; 
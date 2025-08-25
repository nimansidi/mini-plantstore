import React, { useState } from 'react';
import './AddPlantForm.css';

const AddPlantForm = ({ onSubmit, categories, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    categories: [],
    stockAvailable: true,
    description: '',
    careLevel: 'Medium',
    waterNeeds: 'Medium',
    lightNeeds: 'Indirect Light'
  });

  const [errors, setErrors] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Plant name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Plant name cannot exceed 100 characters';
    }

    if (!formData.price || formData.price <= 0) {
      newErrors.price = 'Price must be a positive number';
    }

    if (selectedCategories.length === 0) {
      newErrors.categories = 'At least one category is required';
    }

    if (formData.description && formData.description.length > 500) {
      newErrors.description = 'Description cannot exceed 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });

    if (errors.categories) {
      setErrors(prev => ({ ...prev, categories: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const plantData = {
        ...formData,
        categories: selectedCategories,
        price: parseFloat(formData.price)
      };
      
      onSubmit(plantData);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      price: '',
      categories: [],
      stockAvailable: true,
      description: '',
      careLevel: 'Medium',
      waterNeeds: 'Medium',
      lightNeeds: 'Indirect Light'
    });
    setSelectedCategories([]);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="add-plant-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Plant Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'error' : ''}
            placeholder="Enter plant name"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Price (₹) *</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className={errors.price ? 'error' : ''}
            placeholder="0.00"
            step="0.01"
            min="0"
          />
          {errors.price && <span className="error-message">{errors.price}</span>}
        </div>
      </div>

      <div className="form-group">
        <label>Categories *</label>
        <div className="categories-grid">
          {categories.map(category => (
            <label key={category} className="category-checkbox">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <span className="checkbox-label">{category}</span>
            </label>
          ))}
        </div>
        {errors.categories && <span className="error-message">{errors.categories}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="careLevel">Care Level</label>
          <select
            id="careLevel"
            name="careLevel"
            value={formData.careLevel}
            onChange={handleInputChange}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="waterNeeds">Water Needs</label>
          <select
            id="waterNeeds"
            name="waterNeeds"
            value={formData.waterNeeds}
            onChange={handleInputChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="lightNeeds">Light Needs</label>
          <select
            id="lightNeeds"
            name="lightNeeds"
            value={formData.lightNeeds}
            onChange={handleInputChange}
          >
            <option value="Low Light">Low Light</option>
            <option value="Indirect Light">Indirect Light</option>
            <option value="Bright Light">Bright Light</option>
            <option value="Full Sun">Full Sun</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className={errors.description ? 'error' : ''}
          placeholder="Enter plant description (optional)"
          rows="3"
          maxLength="500"
        />
        {errors.description && <span className="error-message">{errors.description}</span>}
        <div className="char-count">
          {formData.description.length}/500 characters
        </div>
      </div>

      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="stockAvailable"
            checked={formData.stockAvailable}
            onChange={handleInputChange}
          />
          <span>Available in Stock</span>
        </label>
      </div>

      <div className="form-actions">
        <button type="button" onClick={handleReset} className="reset-btn">
          Reset
        </button>
        <button type="button" onClick={onCancel} className="cancel-btn">
          Cancel
        </button>
        <button type="submit" className="submit-btn">
          Add Plant
        </button>
      </div>
    </form>
  );
};

export default AddPlantForm; 
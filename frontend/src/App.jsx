import React, { useState, useEffect } from 'react';
import { Search, Filter, Plus, X, Leaf } from 'lucide-react';
import PlantList from './components/PlantList';
import PlantCard from './components/PlantCard';
import AddPlantForm from './components/AddPlantForm';
import { plantsAPI, healthCheck } from './api';
import './App.css';

function App() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  // Fetch plants and categories on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Filter plants when search, category, or sort changes
  useEffect(() => {
    filterAndSortPlants();
  }, [plants, searchTerm, selectedCategory, sortBy, sortOrder]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Check API health first
      await healthCheck();
      
      // Fetch plants and categories in parallel
      const [plantsResponse, categoriesResponse] = await Promise.all([
        plantsAPI.getPlants(),
        plantsAPI.getCategories()
      ]);
      
      setPlants(plantsResponse.data);
      setCategories(categoriesResponse.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch data');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortPlants = () => {
    let filtered = [...plants];

    // Apply search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plant.categories.some(cat => 
          cat.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        (plant.description && plant.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(plant =>
        plant.categories.includes(selectedCategory)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredPlants(filtered);
  };

  const handleAddPlant = async (plantData) => {
    try {
      const response = await plantsAPI.addPlant(plantData);
      setPlants(prev => [...prev, response.data]);
      setShowAddForm(false);
      alert('Plant added successfully!');
    } catch (err) {
      alert(`Failed to add plant: ${err.message}`);
    }
  };

  const handleDeletePlant = async (plantId) => {
    if (window.confirm('Are you sure you want to delete this plant?')) {
      try {
        await plantsAPI.deletePlant(plantId);
        setPlants(prev => prev.filter(plant => plant._id !== plantId));
        alert('Plant deleted successfully!');
      } catch (err) {
        alert(`Failed to delete plant: ${err.message}`);
      }
    }
  };

  const handleStockToggle = async (plantId, currentStock) => {
    try {
      const response = await plantsAPI.updatePlant(plantId, {
        stockAvailable: !currentStock
      });
      setPlants(prev => 
        prev.map(plant => 
          plant._id === plantId 
            ? { ...plant, stockAvailable: response.data.stockAvailable }
            : plant
        )
      );
    } catch (err) {
      alert(`Failed to update stock: ${err.message}`);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading plants...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={fetchData} className="retry-btn">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <Leaf size={32} />
            <h1>Mini Plant Store</h1>
          </div>
          <button 
            onClick={() => setShowAddForm(true)}
            className="add-plant-btn"
          >
            <Plus size={20} />
            Add Plant
          </button>
        </div>
      </header>

      <main className="app-main">
        <div className="search-filters">
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search plants by name, category, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filters-container">
            <div className="filter-group">
              <Filter size={16} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="careLevel">Sort by Care Level</option>
              </select>
            </div>

            <div className="filter-group">
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="sort-btn"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
        </div>

        <div className="results-info">
          <p>Showing {filteredPlants.length} of {plants.length} plants</p>
        </div>

        {filteredPlants.length === 0 ? (
          <div className="no-results">
            <p>No plants found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="clear-filters-btn"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <PlantList 
            plants={filteredPlants}
            onDelete={handleDeletePlant}
            onStockToggle={handleStockToggle}
          />
        )}
      </main>

      {showAddForm && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add New Plant</h2>
              <button 
                onClick={() => setShowAddForm(false)}
                className="close-btn"
              >
                <X size={24} />
              </button>
            </div>
            <AddPlantForm 
              onSubmit={handleAddPlant}
              categories={categories}
              onCancel={() => setShowAddForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 
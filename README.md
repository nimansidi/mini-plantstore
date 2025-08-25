# Mini Plant Store 🌱

A full-stack plant store application built with React frontend and Node.js backend, featuring a comprehensive plant catalog with search, filtering, and admin management capabilities.

## Features ✨

### Frontend
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Plant Catalog**: Grid view of all plants with detailed information
- **Search & Filter**: Search by name, category, or description with real-time filtering
- **Category Filtering**: Filter plants by multiple categories (Indoor, Outdoor, Succulent, etc.)
- **Sorting**: Sort plants by name, price, or care level
- **Admin Panel**: Add, edit, and delete plants with form validation
- **Stock Management**: Toggle plant availability status
- **Loading States**: Smooth loading and error handling

### Backend
- **RESTful API**: Complete CRUD operations for plants
- **MongoDB Integration**: Scalable database with Mongoose ODM
- **Input Validation**: Comprehensive validation using express-validator
- **Search Functionality**: Text search across plant names, categories, and descriptions
- **Filtering**: Advanced filtering by category, price range, and stock availability
- **Error Handling**: Proper error responses and logging

### Database
- **50+ Plants**: Pre-seeded with realistic plant data from Urvann
- **Rich Plant Data**: Includes care levels, water needs, light requirements
- **Multiple Categories**: Plants can belong to multiple categories
- **Stock Tracking**: Real-time availability status

## Tech Stack 🛠️

- **Frontend**: React 18, CSS3, Lucide React Icons
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Validation**: express-validator
- **Styling**: Custom CSS with responsive design
- **Icons**: Lucide React for modern iconography

## Project Structure 📁

```
mini-plant-store/
├── backend/
│   ├── package.json          # Backend dependencies
│   ├── server.js             # Express server setup
│   ├── models/
│   │   └── Plant.js          # Mongoose plant model
│   ├── routes/
│   │   └── plants.js         # API routes
│   └── seed/
│       └── seed.js           # Database seeding script
├── frontend/
│   ├── package.json          # Frontend dependencies
│   ├── public/
│   │   └── index.html        # Main HTML file
│   └── src/
│       ├── index.jsx         # React entry point
│       ├── App.jsx           # Main app component
│       ├── api.js            # API service functions
│       ├── components/
│       │   ├── PlantList.jsx     # Plant grid component
│       │   ├── PlantCard.jsx     # Individual plant card
│       │   └── AddPlantForm.jsx  # Add/edit plant form
│       ├── App.css           # Main app styles
│       ├── index.css         # Global styles
│       └── components/
│           ├── PlantList.css     # Plant list styles
│           ├── PlantCard.css     # Plant card styles
│           └── AddPlantForm.css  # Form styles
└── README.md                 # This file
```

## Prerequisites 📋

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

## Installation & Setup 🚀

### 1. Clone the Repository
```bash
git clone <repository-url>
cd mini-plant-store
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/mini-plant-store
PORT=5000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Database Setup
Make sure MongoDB is running, then seed the database:
```bash
cd ../backend
npm run seed
```

### 5. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints 🔌

### Plants
- `GET /api/plants` - Get all plants with search/filter options
- `GET /api/plants/:id` - Get plant by ID
- `POST /api/plants` - Add new plant
- `PUT /api/plants/:id` - Update plant
- `DELETE /api/plants/:id` - Delete plant
- `GET /api/plants/categories/all` - Get all categories

### Health Check
- `GET /health` - API health status

## Usage Guide 📖

### Browsing Plants
1. View the plant catalog on the homepage
2. Use the search bar to find specific plants
3. Filter by category using the dropdown
4. Sort plants by name, price, or care level

### Adding Plants (Admin)
1. Click the "Add Plant" button in the header
2. Fill out the form with plant details
3. Select multiple categories as needed
4. Submit the form to add the plant

### Managing Plants
1. Toggle stock availability using the stock button
2. Delete plants using the delete button
3. All changes are saved automatically

## Plant Categories 🌿

The application includes 15 plant categories:
- Indoor, Outdoor, Succulent, Air Purifying
- Home Decor, Low Maintenance, Flowering
- Foliage, Herb, Tropical, Desert
- Aquatic, Bonsai, Climbing, Hanging

## Responsive Design 📱

- **Desktop**: Full-featured layout with side-by-side elements
- **Tablet**: Optimized for medium screens
- **Mobile**: Single-column layout with touch-friendly controls

## Future Enhancements 🚀

- User authentication and authorization
- Shopping cart functionality
- Plant care reminders
- Image upload for plants
- Advanced filtering options
- Plant reviews and ratings
- Order management system

## Contributing 🤝

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License 📄

This project is licensed under the MIT License.

## Support 💬

For support or questions, please open an issue in the repository.

---

**Built with ❤️ for Urvann's Mini Plant Store** 
const mongoose = require('mongoose');
const Plant = require('../models/Plant');

mongoose.connect('mongodb://localhost:27017/mini-plant-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB for seeding'))
.catch(err => console.error('MongoDB connection error:', err));

const plants = [
  {
    name: "Money Plant (Epipremnum aureum)",
    price: 299,
    categories: ["Indoor", "Air Purifying", "Low Maintenance"],
    stockAvailable: true,
    description: "Popular indoor plant known for bringing good luck and prosperity.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Snake Plant (Sansevieria trifasciata)",
    price: 399,
    categories: ["Indoor", "Air Purifying", "Low Maintenance"],
    stockAvailable: true,
    description: "Excellent air purifier that releases oxygen at night.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Low Light"
  },
  {
    name: "Peace Lily (Spathiphyllum)",
    price: 599,
    categories: ["Indoor", "Air Purifying", "Flowering"],
    stockAvailable: true,
    description: "Beautiful flowering plant that helps remove toxins from the air.",
    careLevel: "Medium",
    waterNeeds: "High",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Aloe Vera",
    price: 199,
    categories: ["Indoor", "Outdoor", "Succulent", "Low Maintenance"],
    stockAvailable: true,
    description: "Medicinal succulent plant with healing properties.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Bright Light"
  },
  {
    name: "Spider Plant (Chlorophytum comosum)",
    price: 249,
    categories: ["Indoor", "Air Purifying", "Hanging", "Low Maintenance"],
    stockAvailable: true,
    description: "Produces plantlets that hang down like spiders.",
    careLevel: "Easy",
    waterNeeds: "Medium",
    lightNeeds: "Indirect Light"
  },
  {
    name: "ZZ Plant (Zamioculcas zamiifolia)",
    price: 799,
    categories: ["Indoor", "Low Maintenance", "Home Decor"],
    stockAvailable: true,
    description: "Ultra-low maintenance plant with glossy, dark green leaves.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Low Light"
  },
  {
    name: "Monstera Deliciosa",
    price: 1299,
    categories: ["Indoor", "Tropical", "Home Decor"],
    stockAvailable: true,
    description: "Famous Swiss cheese plant with distinctive split leaves.",
    careLevel: "Medium",
    waterNeeds: "Medium",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Fiddle Leaf Fig (Ficus lyrata)",
    price: 1899,
    categories: ["Indoor", "Home Decor", "Foliage"],
    stockAvailable: true,
    description: "Trendy indoor tree with large, violin-shaped leaves.",
    careLevel: "Hard",
    waterNeeds: "Medium",
    lightNeeds: "Bright Light"
  },
  {
    name: "Pothos (Epipremnum aureum 'Golden')",
    price: 349,
    categories: ["Indoor", "Hanging", "Low Maintenance"],
    stockAvailable: true,
    description: "Golden variegated version of money plant.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Chinese Evergreen (Aglaonema)",
    price: 449,
    categories: ["Indoor", "Low Maintenance", "Foliage"],
    stockAvailable: true,
    description: "Colorful foliage plant with red, pink, or silver variegation.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Low Light"
  },
  {
    name: "Rubber Plant (Ficus elastica)",
    price: 899,
    categories: ["Indoor", "Home Decor", "Foliage"],
    stockAvailable: true,
    description: "Classic indoor tree with large, glossy leaves.",
    careLevel: "Medium",
    waterNeeds: "Medium",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Philodendron Brasil",
    price: 549,
    categories: ["Indoor", "Hanging", "Tropical"],
    stockAvailable: true,
    description: "Beautiful trailing plant with heart-shaped leaves.",
    careLevel: "Easy",
    waterNeeds: "Medium",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Jade Plant (Crassula ovata)",
    price: 299,
    categories: ["Indoor", "Succulent", "Low Maintenance"],
    stockAvailable: true,
    description: "Traditional money tree with thick, jade-green leaves.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Bright Light"
  },
  {
    name: "String of Pearls (Senecio rowleyanus)",
    price: 399,
    categories: ["Indoor", "Succulent", "Hanging"],
    stockAvailable: true,
    description: "Unique succulent with bead-like leaves.",
    careLevel: "Medium",
    waterNeeds: "Low",
    lightNeeds: "Bright Light"
  },
  {
    name: "Calathea Orbifolia",
    price: 699,
    categories: ["Indoor", "Tropical", "Foliage"],
    stockAvailable: true,
    description: "Stunning tropical plant with large, round leaves.",
    careLevel: "Hard",
    waterNeeds: "High",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Bird of Paradise (Strelitzia reginae)",
    price: 1599,
    categories: ["Indoor", "Outdoor", "Tropical", "Flowering"],
    stockAvailable: true,
    description: "Dramatic tropical plant with exotic flowers.",
    careLevel: "Medium",
    waterNeeds: "High",
    lightNeeds: "Bright Light"
  },
  {
    name: "Dragon Tree (Dracaena marginata)",
    price: 649,
    categories: ["Indoor", "Low Maintenance", "Home Decor"],
    stockAvailable: true,
    description: "Sleek, modern plant with thin, arching leaves.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Pilea Peperomioides",
    price: 499,
    categories: ["Indoor", "Low Maintenance", "Home Decor"],
    stockAvailable: true,
    description: "Popular plant with round, coin-like leaves.",
    careLevel: "Medium",
    waterNeeds: "Medium",
    lightNeeds: "Indirect Light"
  },
  {
    name: "String of Hearts (Ceropegia woodii)",
    price: 449,
    categories: ["Indoor", "Succulent", "Hanging"],
    stockAvailable: true,
    description: "Delicate trailing succulent with heart-shaped leaves.",
    careLevel: "Medium",
    waterNeeds: "Low",
    lightNeeds: "Bright Light"
  },
  {
    name: "Croton (Codiaeum variegatum)",
    price: 549,
    categories: ["Indoor", "Tropical", "Foliage"],
    stockAvailable: true,
    description: "Colorful tropical plant with vibrant leaves.",
    careLevel: "Medium",
    waterNeeds: "Medium",
    lightNeeds: "Bright Light"
  },
  {
    name: "Bamboo Palm (Chamaedorea seifrizii)",
    price: 799,
    categories: ["Indoor", "Air Purifying", "Tropical"],
    stockAvailable: true,
    description: "Elegant palm that grows in clumps like bamboo.",
    careLevel: "Medium",
    waterNeeds: "Medium",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Ponytail Palm (Beaucarnea recurvata)",
    price: 899,
    categories: ["Indoor", "Low Maintenance", "Desert"],
    stockAvailable: true,
    description: "Unique plant with a swollen trunk and curly leaves.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Bright Light"
  },
  {
    name: "African Violet (Saintpaulia)",
    price: 199,
    categories: ["Indoor", "Flowering", "Low Maintenance"],
    stockAvailable: true,
    description: "Compact flowering plant that blooms year-round.",
    careLevel: "Medium",
    waterNeeds: "Medium",
    lightNeeds: "Bright Light"
  },
  {
    name: "Orchid (Phalaenopsis)",
    price: 899,
    categories: ["Indoor", "Flowering", "Home Decor"],
    stockAvailable: true,
    description: "Elegant flowering plant with long-lasting blooms.",
    careLevel: "Hard",
    waterNeeds: "Low",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Lucky Bamboo (Dracaena sanderiana)",
    price: 299,
    categories: ["Indoor", "Low Maintenance", "Home Decor"],
    stockAvailable: true,
    description: "Traditional Feng Shui plant for good luck.",
    careLevel: "Easy",
    waterNeeds: "Medium",
    lightNeeds: "Indirect Light"
  },
  {
    name: "English Ivy (Hedera helix)",
    price: 249,
    categories: ["Indoor", "Outdoor", "Climbing", "Air Purifying"],
    stockAvailable: true,
    description: "Classic climbing vine for indoor or outdoor use.",
    careLevel: "Easy",
    waterNeeds: "Medium",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Boston Fern (Nephrolepis exaltata)",
    price: 399,
    categories: ["Indoor", "Air Purifying", "Foliage"],
    stockAvailable: true,
    description: "Lush fern with feathery fronds.",
    careLevel: "Medium",
    waterNeeds: "High",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Peperomia Obtusifolia",
    price: 349,
    categories: ["Indoor", "Low Maintenance", "Foliage"],
    stockAvailable: true,
    description: "Compact plant with thick, spoon-shaped leaves.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Haworthia (Zebra Plant)",
    price: 199,
    categories: ["Indoor", "Succulent", "Low Maintenance"],
    stockAvailable: true,
    description: "Small succulent with distinctive white stripes.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Bright Light"
  },
  {
    name: "Echeveria Elegans",
    price: 179,
    categories: ["Indoor", "Outdoor", "Succulent", "Low Maintenance"],
    stockAvailable: true,
    description: "Beautiful rosette-forming succulent.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Full Sun"
  },
  {
    name: "Kalanchoe Blossfeldiana",
    price: 299,
    categories: ["Indoor", "Flowering", "Succulent"],
    stockAvailable: true,
    description: "Colorful flowering succulent that blooms for months.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Bright Light"
  },
  {
    name: "Christmas Cactus (Schlumbergera)",
    price: 399,
    categories: ["Indoor", "Flowering", "Succulent"],
    stockAvailable: true,
    description: "Holiday favorite that blooms around Christmas time.",
    careLevel: "Medium",
    waterNeeds: "Medium",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Alocasia Polly (African Mask)",
    price: 799,
    categories: ["Indoor", "Tropical", "Foliage"],
    stockAvailable: true,
    description: "Dramatic tropical plant with arrow-shaped leaves.",
    careLevel: "Hard",
    waterNeeds: "High",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Begonia Rex",
    price: 449,
    categories: ["Indoor", "Foliage", "Low Maintenance"],
    stockAvailable: true,
    description: "Stunning foliage plant with colorful, patterned leaves.",
    careLevel: "Medium",
    waterNeeds: "Medium",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Coleus (Plectranthus scutellarioides)",
    price: 199,
    categories: ["Indoor", "Outdoor", "Foliage", "Low Maintenance"],
    stockAvailable: true,
    description: "Colorful foliage plant with vibrant leaves.",
    careLevel: "Easy",
    waterNeeds: "Medium",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Polka Dot Plant (Hypoestes phyllostachya)",
    price: 249,
    categories: ["Indoor", "Foliage", "Low Maintenance"],
    stockAvailable: true,
    description: "Charming plant with polka dots on leaves.",
    careLevel: "Easy",
    waterNeeds: "Medium",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Nerve Plant (Fittonia albivenis)",
    price: 299,
    categories: ["Indoor", "Foliage", "Low Maintenance"],
    stockAvailable: true,
    description: "Beautiful plant with white or pink veins.",
    careLevel: "Medium",
    waterNeeds: "High",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Prayer Plant (Maranta leuconeura)",
    price: 349,
    categories: ["Indoor", "Tropical", "Foliage"],
    stockAvailable: true,
    description: "Fascinating plant that folds its leaves at night.",
    careLevel: "Medium",
    waterNeeds: "High",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Arrowhead Plant (Syngonium podophyllum)",
    price: 399,
    categories: ["Indoor", "Tropical", "Climbing"],
    stockAvailable: true,
    description: "Versatile plant with arrow-shaped leaves.",
    careLevel: "Easy",
    waterNeeds: "Medium",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Pothos N'Joy",
    price: 449,
    categories: ["Indoor", "Hanging", "Low Maintenance"],
    stockAvailable: true,
    description: "Stunning variegated pothos with white and green leaves.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Philodendron Micans",
    price: 599,
    categories: ["Indoor", "Hanging", "Tropical"],
    stockAvailable: true,
    description: "Velvety-leaved philodendron with bronze-green foliage.",
    careLevel: "Medium",
    waterNeeds: "Medium",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Scindapsus Pictus (Satin Pothos)",
    price: 499,
    categories: ["Indoor", "Hanging", "Tropical"],
    stockAvailable: true,
    description: "Beautiful plant with silvery-green leaves.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Indirect Light"
  },
  {
    name: "Hoya Carnosa (Wax Plant)",
    price: 699,
    categories: ["Indoor", "Hanging", "Flowering"],
    stockAvailable: true,
    description: "Beautiful trailing plant with waxy, star-shaped flowers.",
    careLevel: "Medium",
    waterNeeds: "Low",
    lightNeeds: "Bright Light"
  },
  {
    name: "String of Bananas (Senecio radicans)",
    price: 349,
    categories: ["Indoor", "Succulent", "Hanging"],
    stockAvailable: true,
    description: "Unique succulent with banana-shaped leaves.",
    careLevel: "Medium",
    waterNeeds: "Low",
    lightNeeds: "Bright Light"
  },
  {
    name: "Burro's Tail (Sedum morganianum)",
    price: 399,
    categories: ["Indoor", "Succulent", "Hanging"],
    stockAvailable: true,
    description: "Stunning succulent with trailing stems.",
    careLevel: "Medium",
    waterNeeds: "Low",
    lightNeeds: "Bright Light"
  },
  {
    name: "Panda Plant (Kalanchoe tomentosa)",
    price: 249,
    categories: ["Indoor", "Succulent", "Low Maintenance"],
    stockAvailable: true,
    description: "Fuzzy succulent with brown spots on leaf edges.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Bright Light"
  },
  {
    name: "Jelly Bean Plant (Sedum rubrotinctum)",
    price: 199,
    categories: ["Indoor", "Outdoor", "Succulent", "Low Maintenance"],
    stockAvailable: true,
    description: "Colorful succulent that turns red in bright light.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Full Sun"
  },
  {
    name: "Moon Cactus (Gymnocalycium mihanovichii)",
    price: 299,
    categories: ["Indoor", "Succulent", "Low Maintenance"],
    stockAvailable: true,
    description: "Colorful cactus grafted onto a green base.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Bright Light"
  },
  {
    name: "Bunny Ears Cactus (Opuntia microdasys)",
    price: 249,
    categories: ["Indoor", "Outdoor", "Succulent", "Low Maintenance"],
    stockAvailable: true,
    description: "Cute cactus with flat, oval pads like bunny ears.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Full Sun"
  },
  {
    name: "Golden Barrel Cactus (Echinocactus grusonii)",
    price: 599,
    categories: ["Indoor", "Outdoor", "Succulent", "Desert"],
    stockAvailable: true,
    description: "Stunning spherical cactus with golden spines.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Full Sun"
  },
  {
    name: "Prickly Pear Cactus (Opuntia ficus-indica)",
    price: 399,
    categories: ["Indoor", "Outdoor", "Succulent", "Desert"],
    stockAvailable: true,
    description: "Classic cactus with flat, paddle-shaped stems.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Full Sun"
  },
  {
    name: "Saguaro Cactus (Carnegiea gigantea)",
    price: 899,
    categories: ["Outdoor", "Succulent", "Desert"],
    stockAvailable: true,
    description: "Iconic cactus that can grow up to 40 feet tall.",
    careLevel: "Easy",
    waterNeeds: "Low",
    lightNeeds: "Full Sun"
  }
];

const seedDatabase = async () => {
  try {
    await Plant.deleteMany({});
    console.log('Cleared existing plants');
    
    const result = await Plant.insertMany(plants);
    console.log(`Successfully seeded ${result.length} plants`);
    
    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedDatabase(); 
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for API requests
import "./style.css";
import RestCard from "./RestCard";


const Resturants = () => {
  // State to store restaurant data
  const [restaurants, setRestaurants] = useState([]);

  // Fetch restaurant data from API when component mounts
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:5000/restaurants"); 
        // // Update API URL as needed
        setRestaurants(response.data); // Store data in state
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <>

      {/* Restaurants List */}
        <div className="container text-dark">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {/* Render Restaurant Cards dynamically */}
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <RestCard key={restaurant._id} restaurant={restaurant} />
            ))
          ) : (
            <p className="text-center mt-4">No restaurants found.</p>
          )}
        </div>
        </div>
    </>
  );
};

export default Resturants;

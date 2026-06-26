import React from "react";
import RestaurantCard from "./RestaurantCard";

const bhopalRestaurants = [
  {
    id: 1,
    name: "Under The Mango Tree",
    description:
      "Enjoy the thrill of grill and barbecue at Under The Mango Tree restaurant at Jehan Numa Palace, Bhopal. Head here now!",
    image:
      "https://assets.simplotel.com/simplotel/image/upload/w_900,f_auto,c_fit/jehan-numa-palace/28_fzmowp",
    rating: "3.6",
    tags: ["Indian", "Chinese", "Italian"],
  },
  {
    id: 2,
    name: "Wind & Waves",
    description:
      "Dine with a panoramic, breath-taking view of Bhopal's Upper Lake. Perfect for evening sunsets and open-air multi-cuisine delicacies.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60",
    rating: "4.2",
    tags: ["Continental", "North Indian", "Fast Food"],
  },
  {
    id: 3,
    name: "Sahn-An-Nasheen",
    description:
      "Immerse yourself in Nawabi heritage with rich, authentic Mughlai flavors served in a beautiful palace courtyard environment.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
    rating: "4.5",
    tags: ["Mughlai", "Awadhi", "Desserts"],
  },
];

function FeaturedRestaurants() {
  return (
    <div className="border-bottom py-5 bg-grade text-white d-flex align-items-center justify-content-center">
      <div className="container">
        {/* 1. Main centered wrapper */}
        {/* This centers the entire section (heading + cards) in the middle of the screen */}
        <div className="row justify-content-center">
          {/* 2. A constrained container to hold both items so they share the exact same left edge */}
          <div className="col-12 col-xl-11">
            {/* 3. The Heading - Guaranteed to sit ON TOP and perfectly to the LEFT */}
            <div className="text-start mb-4">
              <h2 className="fs-2 fw-bolder m-0">Featured Restaurants</h2>
            </div>

            {/* 4. The Cards Grid - Guaranteed to sit directly BELOW the heading */}
            {/* We removed the heading from here, so now only the cards form the grid! */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {bhopalRestaurants.map((restaurant) => (
                <div className="col" key={restaurant.id}>
                  <RestaurantCard restaurant={restaurant} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedRestaurants;

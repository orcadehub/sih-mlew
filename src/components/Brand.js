import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import Cat from "../assets/amazon.jpg";
import Cat1 from "../assets/flip.png";
import Cat2 from "../assets/myn.jpeg";
const categories = [
  {
    name: "Amazon",
    image: Cat,
  },
  {
    name: "Flipkart",
    image: Cat1,
  },
  {
    name: "Myntra",
    image: Cat2,
  },
];

const Brand = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log(`Selected Category: ${category}`);
    // Call your API or filter products here
  };

  return (
    <div>
    <h2 className="text-center">Search by Brand</h2>
      <CategoryFilter
        categories={categories}
        onCategorySelect={handleCategorySelect}
      />

      {selectedCategory && (
        <p>
          Showing products for: <strong>{selectedCategory}</strong>
        </p>
      )}
    </div>
  );
};

export default Brand;

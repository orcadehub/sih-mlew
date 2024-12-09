import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import Cat from "../assets/shirts.jpeg";
import Cat1 from "../assets/pants.jpeg";
import Cat2 from "../assets/saree.jpeg";
import Cat3 from "../assets/shoes.jpeg";
import Cat4 from "../assets/tops.jpeg";
import Cat5 from "../assets/jw.jpeg";
const categories = [
  {
    name: "Shirts",
    image: Cat,
  },
  {
    name: "Pants",
    image: Cat1,
  },
  {
    name: "Shoes",
    image: Cat3,
  },
  {
    name: "Sarees",
    image: Cat2,
  },
  {
    name: "Tops",
    image: Cat4,
  },
  {
    name: "Jewelry",
    image: Cat5,
  },
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log(`Selected Category: ${category}`);
    // Call your API or filter products here
  };

  return (
    <div>
      <h2 className="text-center">Search by Categories</h2>
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

export default Category;

import React from "react";
import "./CategoryFilter.css";

const CategoryFilter = ({ categories, onCategorySelect }) => {
  return (
    <div className="category_filter">
      
      <div className="category_grid">
        {categories.map((category) => (
          <div
            key={category.name}
            className="category_card"
            onClick={() => onCategorySelect(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="category_image"
            />
            <p className="category_name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;

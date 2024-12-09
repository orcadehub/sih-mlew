import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BestDeals.css"; // Add styles here
import config from "../config";
const BestDeals = () => {
  const [bestDeals, setBestDeals] = useState([]);
  const baseURL =
    process.env.NODE_ENV === "development"
      ? config.LOCAL_BASE_URL.replace(/\/$/, "")
      : config.BASE_URL.replace(/\/$/, "");
  useEffect(() => {
    const fetchBestDeals = async () => {
      try {
        // Fetch products with a special "deal" category or tag
        const response = await axios.get(`${baseURL}/products/best-deals`);
        setBestDeals(response.data.products);
      } catch (error) {
        console.error("Error fetching best deals:", error);
      }
    };

    fetchBestDeals();
  }, []);

  return (
    <div className="best_deals_container">
      <h2 className="deals_heading">🔥 Best Deals & Offers 🔥</h2>
      {bestDeals.length > 0 ? (
        <div className="deals_grid">
          {bestDeals.map((product) => (
            <div key={product.productId} className="deal_card">
              <img
                src={product.image}
                alt={product.name}
                className="deal_image"
              />
              <div className="deal_info">
                <h3 className="product_name">{product.name}</h3>
                <p className="product_price">₹{product.price}</p>
                <p className="product_offer">
                  Special Offer: {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no_deals">No special deals available at the moment!</p>
      )}
    </div>
  );
};

export default BestDeals;

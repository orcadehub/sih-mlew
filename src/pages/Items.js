import React, { useState } from "react";
import "./Items.css";
import s1 from '../assets/s1.jpg';

const Items = () => {
  const [cart, setCart] = useState({});
  const products = [
    { id: 1, name: "Shirt", category: "shirt", image: s1 },
    { id: 2, name: "Pant", category: "pant", image: s1 },
    { id: 3, name: "Shoes", category: "shoes", image: s1 },
    { id: 4, name: "Glasses", category: "glasses", image: s1 },
    { id: 5, name: "T-Shirt", category: "shirt", image: s1 },
    { id: 6, name: "Shirt", category: "shirt", image: s1 },
    { id: 7, name: "Pant", category: "pant", image: s1 },
    { id: 8, name: "Shoes", category: "shoes", image: s1 },
    { id: 9, name: "Glasses", category: "glasses", image: s1 },
    { id: 10, name: "T-Shirt", category: "shirt", image: s1 },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart[product.category]) {
        alert(`Only one ${product.category} can be added.`);
        return prevCart;
      }
      return { ...prevCart, [product.category]: product };
    });
  };

  const removeFromCart = (category) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[category];
      return newCart;
    });
  };

  return (
    <>
      <div className="items_div">
        <div className="left_section">
          <div className="inp_div">
            <i className="fa-solid fa-magnifying-glass-arrow-right icon"></i>
            <input
              type="search"
              className="inp_btn"
              placeholder="Search for products"
            />
          </div>
          <div className="products_grid">
            {products.map((product) => (
              <div key={product.id} className="product_card">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} /> <br />
                <button onClick={() => addToCart(product)}>Add</button>
              </div>
            ))}
          </div>
        </div>
        <div className="cart_div">
          <h2>Cart</h2>
          {Object.values(cart).length === 0 ? (
            <p>Cart is empty.</p>
          ) : (
            <>
              {Object.values(cart).map((item) => (
                <div key={item.id} className="cart_item">
                  <h4>{item.name}</h4>
                  <img src={item.image} alt={item.name} className="cart_image" />
                  <button onClick={() => removeFromCart(item.category)} className="remove_btn">
                    Remove
                  </button>
                  <button className="try_now_btn">Try Now</button>
                </div>
              ))}
              {Object.values(cart).length > 1 && (
                <button className="try_all_btn">Try All</button>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Items;

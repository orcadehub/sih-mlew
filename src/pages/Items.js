import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast
import './Items.css';
import config from "../config";

const Items = () => {
  console.log(process.env.REACT_APP_BASE_URL)
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const baseURL =
  process.env.NODE_ENV === "development"
    ? config.LOCAL_BASE_URL.replace(/\/$/, "")
    : config.BASE_URL.replace(/\/$/, "");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseURL}/products`, {
          params: { search },
        });
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products. Please try again.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart[product.category]) {
        toast.error(`Only one ${product.category} can be added.`); // Show error toast
        return prevCart;
      }
      // toast.success(`${product.name} added to the cart!`); // Show success toast
      return { ...prevCart, [product.category]: product };
    });
  };

  const removeFromCart = (category) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[category];
      toast.info(`${category} removed from the cart.`); // Info toast
      return newCart;
    });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleTryNow = (product) => {
    // Navigate to /wearing and pass the selected product as state
    navigate('/wearing', { state: { product } });
    toast.success(`You are now trying ${product.name}!`); // Show success toast
  };

  const handleTryAll = () => {
    // Navigate to /wearing and pass all cart items as state
    navigate('/wearing', { state: { products: Object.values(cart) } });
    toast.success('You are now trying all items in the cart!'); // Show success toast
  };

  return (
    <div className="items_div">
      <div className="left_section">
        <div className="inp_div">
          <i className="fa-solid fa-magnifying-glass-arrow-right icon"></i>
          <input
            type="search"
            className="inp_btn"
            placeholder="Search for products"
            value={search}
            onChange={handleSearch}
          />
        </div>

        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="error_message">{error}</p>
        ) : (
          <div className="products_grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.productId} className="product_card">
                  <strong>{product.name}</strong> <br/>
                  <img src={product.image} alt={product.name} />
                  <br />
                  <button onClick={() => addToCart(product)}>Add</button>
                </div>
              ))
            ) : (
              <p>No items found.</p>
            )}
          </div>
        )}
      </div>

      <div className="cart_div">
        <h2>Cart</h2>
        {Object.values(cart).length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          <>
            {Object.values(cart).map((item) => (
              <div key={item.productId} className="cart_item">
                <strong>{item.name}</strong>
                <img src={item.image} alt={item.name} className="cart_image" />
                <button
                  onClick={() => removeFromCart(item.category)}
                  className="remove_btn"
                >
                  Remove
                </button>
                <button
                  onClick={() => handleTryNow(item)}
                  className="try_now_btn"
                >
                  Try Now
                </button>
              </div>
            ))}
            {Object.values(cart).length > 1 && (
              <button onClick={handleTryAll} className="try_all_btn">
                Try All
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Items;

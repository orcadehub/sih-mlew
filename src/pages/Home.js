import React from "react";
import c1 from "../assets/c1.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate=useNavigate()
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide carousel_box">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={c1} class="img_box" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={c1} class="img_box" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={c1} class="img_box" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="button_box">
        <button onClick={()=>{navigate('/items')}}>START WEARING</button>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import heroImg from "../assets/heroimg1.png";
import "../../src/HeroSection.css";

const HeroSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere  Learn on your Suitable Schedule
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            <div className="hero-search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <img src={heroImg} alt="Hero" className="w-100 hero__img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

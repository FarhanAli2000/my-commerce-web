import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import Header from "../../home/header"; // Ensure Header is correctly implemented and imported
import Footer from "../../home/footer/Footer";
import automative from "../../home/automative.png";
import electronic from "../../home/electronic.png";
import fashion from "../../home/fashion.png";
import healthcare from "../../home/healthcare.png";
import job from "../../home/job.png";
import education from "../../home/education.png";
import realestate from "../../home/realestate (2).png";
import travel from "../../home/travel.png";
import sport from "../../home/sportandgames.png";
import magazine from "../../home/magazine.png";
import pet from "../../home/pet .png";
import iron from "../../home/iron.png";
import image1 from "../../../assets/img/banner/bannerimage1.png";
import image3 from "../../../assets/img/banner/bannerimage3.png";
import image4 from "../../../assets/img/banner/bannerimage4.png";
import LatestBlog from "../../blog/BlogList/LatestBlog/LatestBlog.jsx";
import image2 from "../../../assets/img/banner/bannerimage2.png";
import xIcon from "../../home/x.png";
import insta from "../../home/insta.png";
import fb from "../../home/fb.png";
import tiktok from "../../home/tiktoc.png";
import whatapp from "../../home/whatapp (3).png";
import Carousel from "../../home/slider/Carousel";
import AutomativeCarosuel from "../../home/slider/AutomativeCarousel.jsx";
import RealEstateCarousel from "../../home/slider/RealEstateCarousel.jsx";
import ElectronicCarousel from "../../home/slider/ElectronicCarousel.jsx";
import HealthCareCarousel from "../../home/slider/HealthCareCarousel.jsx";
import SportandgameCarouseCarousel from "../../home/slider/SportandgameCarouseCarousel.jsx";
import ComercialsAds from "../../home/ComercialsAds/ComercialsAds.jsx";
import popup from "../../home/popup_image.png";

import { IoLocationSharp } from "react-icons/io5";
import { BsChat } from "react-icons/bs";
import { FaHeart, FaPhone, FaWhatsapp } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  Badge,
} from "react-bootstrap";

const JobBoard = () => {
  const parms = useLocation().pathname;
  const [isVisible, setIsVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const carListings = [
    {
      id: 1,
      title: "Mercedes Benz",
      location: "Dubai",
      year: "2022",
      mileage: "6,000km",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$350",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-18%20at%2012.17.13%20AM-9swmdy24UAjXDGPDqNLHRFu1i77caw.jpeg",
      featured: true,
    },
    // More listings can be added here
  ];
  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <>
      <div className="main-wrapper">
        <Header parms={parms} />
        <div className="main-wrapper">
          <Header />
          {/* Banner Section */}
          <section className="banner-section">
            <div className="container">
              <div className="home-banner">
                <div className="home-banner-about">
                  <div
                    className="section-search aos r homebannerwrapper_2"
                    data-aos="fade-up"
                  >
                    <p className="explore-text banner-text">
                      <span>Explore top-rated attractions</span>
                    </p>
                    <h1>
                      Let us help you
                      <span>Find, Buy</span>
                      <span>Find, Buy</span> & Own Dreams
                    </h1>
                    <p className="banner-para">
                      Countrys most loved and trusted classified ad listing
                      website. Randomised words which don't look even slightly
                      Browse thousands of items near you.
                    </p>
                  </div>
                  <div className="bannerimages_wrapper">
                    <div className="wrapper_container">
                      <img src={image1} className="banner_img" alt="" />
                      <img src={image2} className="banner_img" />
                    </div>
                    <div className="wrapper_container">
                      <img src={image3} className="banner_img" alt="" />
                      <img src={image4} className="banner_img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Banner Section */}

          {/* Trending Products */}
          <div className="trendingprodct_wrapper container">
            <h3 className="trendingproduct_heading"> Our Trending Product</h3>
            <div className="trendingproducts_container">
              <button className="trendingProductsallname">Iphone 16</button>
              <button className="trendingProductsallname">Cricket Kit</button>
              <button className="trendingProductsallname">Bags</button>
              <button className="trendingProductsallname">Apparel</button>
              <button className="trendingProductsallname">Mens Hoodies</button>
              <button className="trendingProductsallname">Apparel</button>
              <button className="trendingProductsallname">Magazines</button>
              <button className="trendingProductsallname">Mens Hoodies</button>
            </div>
          </div>
          {/* Trending Products */}

          {/* Category Section */}
          <section className="category-section">
            <div className="container">
              <div className="allMedia_Icons">
                <div>
                  <img src={xIcon} alt="Xicon" />
                </div>
                <div>
                  <img src={insta} alt="instagram" />
                </div>
                <div>
                  <img src={fb} alt="facebook" />
                </div>
                <div>
                  <img src={tiktok} alt="tiktok" />
                </div>
                <div>
                  <img src={whatapp} alt="whatsapp" />
                </div>
              </div>
            </div>
          </section>
          <p style={{ color: "red", textAlign: "center" }}>i am JobBoard</p>
          {/* Category Section */}

          {/* Featured Ads Section */}
          {/* Featured Ads Section */}

          {/* All carousel */}

          {/* All carousel */}

          {/* Blog Section */}

          {/* Footer */}
          {/* Footer */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobBoard;

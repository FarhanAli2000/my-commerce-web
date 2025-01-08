import React from "react";
import { useState } from "react";
import {
  ArrowBanner,
  BannerArrow,
  Bannerbg,
  BannerEllipse,
  Blog1,
  Blog2,
  Blog3,
  Category10Svg,
  Category11Svg,
  Category12Svg,
  Category2Svg,
  Category3Svg,
  Category4Svg,
  Category5Svg,
  Category6Svg,
  Category7Svg,
  Category8Svg,
  Category9Svg,
  Category1Svg,
  // CtaImg,
  // Feature2,
  // Feature3,
  // Feature4,
  // Feature5,
  // Feature6,
  // Feature7,
  // Feature8,
  // Feature9,
  // LocationsAustralia,
  // LocationsCanada,
  // LocationsChina,
  // LocationsFrance,
  // LocationsUk,
  // LocationsUsa,
  // Partners1,
  // Partners2,
  // Partners3,
  // Partners4,
  // Partners5,
  // Partners6,
  // PopularImg,
  // ProfileAvatar02,
  // ProfileAvatar03,
  // ProfileAvatar04,
  // ProfileAvatar05,
  // ProfileAvatar06,
  // ProfileAvatar07,
  // ProfileAvatar12,
  // ProfileAvatar13,
  // ProfileAvatar14,
  // Quotes,
  // RightImg,
  // Testimonial1,
  // Testimonial2,
} from "../imagepath";
import Carousel from "./slider/Carousel";
import Footer from "./footer/Footer";

import Header from "./header";
// import Testimonial from "./slider/Testimonial";
// import Sponsors from "./slider/Sponsors";
// import Select from "./select";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AutomativeCarosuel from "..//home/slider/AutomativeCarousel.jsx";
import RealEstateCarousel from "..//home/slider/RealEstateCarousel.jsx";
import ElectronicCarousel from "..//home/slider/ElectronicCarousel.jsx";
import HealthCareCarousel from "..//home/slider/HealthCareCarousel.jsx";
import SportandgameCarouseCarousel from "..//home/slider/SportandgameCarouseCarousel.jsx";
import ComercialsAds from "./ComercialsAds/ComercialsAds.jsx";
import automative from "./automative.png";
import electronic from "./electronic.png";
import fashion from "./fashion.png";
import healthcare from "./healthcare.png";
import job from "./job.png";
import education from "./education.png";
import realestate from "./realestate (2).png";
import travel from "./travel.png";
import sport from "./sportandgames.png";
import magazine from "./magazine.png";
import pet from "./pet .png";
import iron from "./iron.png";

import image1 from "../../assets/img/banner/bannerimage1.png";
import image2 from "../../assets/img/banner/bannerimage2.png";
import image3 from "../../assets/img/banner/bannerimage3.png";
import image4 from "../../assets/img/banner/bannerimage4.png";
import LatestBlog from "../blog/BlogList/LatestBlog/LatestBlog.jsx";
import xIcon from "./x.png";
import insta from "./insta.png";
import fb from "./fb.png";
import tiktok from "./tiktoc.png";
import whatapp from "./whatapp (3).png";
import popup from "./popup_image.png";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const handleSwitchClick = () => {
      if ($("body").hasClass("light")) {
        $("body").removeClass("light");
        $(".switch").removeClass("switched");
      } else {
        $("body").addClass("light");
        $(".switch").addClass("switched");
      }
    };

    const handleScroll = () => {
      const e = document.querySelector(".progress-wrap path");
      const t = e.getTotalLength();
      const o = window.scrollY;
      const r = document.body.clientHeight - window.innerHeight;
      const i = t - (o * t) / r;
      e.style.strokeDashoffset = i;

      if ($(window).scrollTop() > 50) {
        $(".progress-wrap").addClass("active-progress");
      } else {
        $(".progress-wrap").removeClass("active-progress");
      }
    };

    $(".switch").on("click", handleSwitchClick);

    $(window).on("scroll", handleScroll);

    $(".progress-wrap").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 550);
      return false;
    });

    return () => {
      $(".switch").off("click", handleSwitchClick);
      $(window).off("scroll", handleScroll);
      $(".progress-wrap").off("click");
    };
  }, []);

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div className="main-wrapper">
        <Header />
        {/* Banner Section */}
        <section className="banner-section">
          {/* <div className="banner-circle">
            <img src={Bannerbg} className="img-fluid" alt="bannercircle" />
          </div> */}
          <div className="container">
            <div className="home-banner">
              <div className="home-banner-about">
                <div
                  className="section-search aos r  homebannerwrapper_2"
                  data-aos="fade-up"
                >
                  <p className="explore-text   banner-text">
                    {" "}
                    <span>Explore top-rated attractions</span>
                  </p>
                  {/* <img src={ArrowBanner} className="arrow-img" alt="arrow" /> */}
                  <h1>
                    Let us help you
                    <span>Find, Buy</span> & Own Dreams
                  </h1>
                  <p className="banner-para">
                    Countrys most loved and trusted classNameified ad listing
                    website classNameified ad.randomised words which don't look
                    even slightly Browse thousand of items near you.
                  </p>
                </div>

                {/* <div className="col-lg-5">
                  <div className="banner-imgs">
                    <img
                      src={RightImg}
                      className="img-fluid"
                      alt="bannerimage"
                    />
                  </div>
                </div> */}
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

        {/* Trending  Products */}
        <div className="trendingprodct_wrapper container">
          <h3 className="trendingproduct_heading"> Our Trending Product</h3>
          <div className="trendingproducts_container">
            <button className="trendingProductsallname">Iphone 16</button>

            <button className="trendingProductsallname">Cricket Kit</button>

            <button className="trendingProductsallname">Bags</button>

            <button className="trendingProductsallname">Aparmants</button>

            <button className="trendingProductsallname">Mens Hoodies</button>

            <button className="trendingProductsallname">Apparmants</button>

            <button className="trendingProductsallname">Magazines</button>

            <button className="trendingProductsallname">Mens Hoodies</button>
          </div>
        </div>

        {/* Trending  Products */}

        {/* Category Section */}
        <section className="category-section">
          <div className="container">
            <div className="allMedia_Icons">
              <icon>
                <img src={xIcon} alt="Xicon" />
              </icon>
              <icon>
                <img src={insta} alt="instragram" />
              </icon>
              <icon>
                <img src={fb} alt="facebook" />
              </icon>
              <icon>
                <img src={tiktok} alt="tiktok" />
              </icon>
              <icon>
                <img src={whatapp} alt="whatapp" />
              </icon>
            </div>
            <div className="section-heading">
              <div className="row align-items-center">
                <div
                  className="col-md-6 aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h4 className="our_categoryPara">Our Category</h4>
                </div>
                <div
                  className="col-md-6 text-md-end aos aos-init aos-animate"
                  data-aos="fade-up"
                ></div>
              </div>
            </div>
            <div className="row cat_icon_main">
              <div className="col-lg-2 col-md-3 col-sm-6 p-0 category_icons">
                <Link to="/index" className="category-links">
                  <h5>Automotive</h5>
                  <img src={automative} alt="icons" />
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 p-0 category_icons">
                <Link to="/index" className="category-links">
                  <h5>Electronics</h5>
                  <img src={electronic} alt="icons" />
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 p-0 category_icons">
                <Link to="/index" className="category-links">
                  <h5>Fashion Style</h5>
                  <img src={fashion} alt="icons" />
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 p-0 category_icons">
                <Link to="/index" className="category-links">
                  <h5>Health Care</h5>
                  <img src={healthcare} alt="icons" />
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 p-0 category_icons">
                <Link to="/index" className="category-links">
                  <h5>Job Board</h5>
                  <img src={job} alt="icons" />
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 p-0 category_icons">
                <Link to="/index" className="category-links">
                  <h5>Education</h5>
                  <img src={education} alt="icons" />
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 p-0 category_icons">
                <Link to="/index" className="category-links">
                  <h5>Real Estate</h5>
                  <img src={realestate} alt="icons" />
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 p-0 category_icons">
                <Link to="/index" className="category-links">
                  <h5>Travel</h5>
                  <img src={travel} alt="icons" />
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 p-0 category_icons">
                <Link to="/index" className="category-links">
                  <h5>Sports & Game</h5>
                  <img src={sport} alt="icons" />
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 p-0 category_icons">
                <Link to="/index" className="category-links">
                  <h5>Magazines</h5>
                  <img src={magazine} alt="icons" />
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 p-0 category_icons">
                <Link to="/index" className="category-links">
                  <h5>Pet & Animal</h5>
                  <img src={pet} alt="icons" />
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 p-0 category_icons">
                <Link to="/index" className="category-links">
                  <h5>House Hold</h5>
                  <img src={iron} alt="icons" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Category Section */}

        {/* Featured Ads Section */}
        <Carousel />
        {/* Featured Ads Section */}

        {/* All carosuel */}

        <div className="allCarosuel_wrapper">
          <AutomativeCarosuel />
          <RealEstateCarousel />
          <ElectronicCarousel />
          <HealthCareCarousel />
          <SportandgameCarouseCarousel />
        </div>

        {/* All carosuel */}

        <ComercialsAds />

        {/* Latest Blogs  components */}

        <LatestBlog />

        {/* Blog Section */}

        {/* Footer */}
        <Footer />
        {/* Footer */}

        {/* <div class="popup_cnt" id="my-popover">
          <div class="img">
            <div class="close_btn">X</div>
            <img src={popup}   />
          </div>
        </div> */}

        <div>
          {isVisible && (
            <div className="popup_cnt">
              <div className="img">
                <div className="close_btn" onClick={handleClose}>
                  X
                </div>
                <img src={popup} alt="popup" />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* scrollToTop start */}
      <div className="progress-wrap active-progress">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919px, 307.919px",
              strokeDashoffset: "228.265px",
            }}
          />
        </svg>
      </div>
      {/* scrollToTop end */}
    </>
  );
};

export default Home;

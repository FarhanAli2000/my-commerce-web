import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import img from "./automotive.png";

export default function AutomativeCarousel() {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const slider = useRef();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 767) {
        setSlidesToShow(1);
      } else if (width >= 768 && width <= 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <section className="featured-section-color automotive_card_section">
      <div className="container">
        <div className="row align-items-center">
          <div className="featuresection_infodev">
            <h4 className="featuresection_header">Automative</h4>
            <button className="featuresection_btn">View All</button>
          </div>

          <div className="feature-section-info">
            <ul className="info-list">
              <li>Car For Sales</li>
              <li>Car For Sales</li>
              <li>Car For Sales</li>
              <li>Car For Sales</li>
              <li>Car For Sales</li>
            </ul>
          </div>

          <div className="featureline">
            <div className="highlighter"></div>
          </div>

          <button
            type="button"
            role="presentation"
            className="owl-prev  owl-button"
            onClick={() => {
              console.log(slider?.current);
              slider?.current?.slickPrev();
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>

          <button
            type="button"
            role="presentation"
            className="owl-next owl-button"
            onClick={() => slider?.current?.slickNext()}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Slider ref={slider} {...settings} className="featured-slider grid-view">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img" style={{ height: "200px", overflow: "hidden" }}>
                      <Link to="/automative">
                        <img
                          src={img}
                          className="img-fluid"
                          alt="blog-img"
                          style={{ height: "80%", width: "100%", objectFit: "cover" }}
                        />
                      </Link>
                    </div>
                    <div className="bloglist-content" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                      <div className="card-body" style={{ flexGrow: 1 }}>
                        <h6>
                          <Link to="/automative">Mercedez Benz</Link>
                        </h6>
                        <div className="location-info">
                          <p style={{ fontSize: "0.7rem" }}>Education | Education | Education</p>
                        </div>
                        <div className="blog-location-details">
                          <div className="location-info" style={{ marginTop: "1rem" }}>
                            Los Angeles
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate" style={{ fontFamily: "Inter" }}>
                              $350
                            </span>
                          </div>
                          <div className="ratings" style={{ fontFamily: "Inter" }}>
                            1 DAYS AGO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

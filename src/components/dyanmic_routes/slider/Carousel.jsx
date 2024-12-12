import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Feature9 } from "../../imagepath";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMyContext } from "../../store/Contexxt.store";
import { Product } from "../../Api/Api";

export default function Carousel() {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const { cartApi, setCartApi } = useMyContext();

  const fetchData = async () => {
    try {
      const response = await Product();
      setCartApi(response.data);
      // console.log("data", response.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
  const slider = useRef();

  return (
    <section className="featured-section">
      <div className="container">
        <div className="row align-items-center">


          <div className="col-md-6 aos aos-init aos-animate" data-aos="fade-up">
            <div className="section-heading">
              <h2>
                Featu<span className="title-right magentaCircle">red</span> Ads
              </h2>
              <p>Checkout these latest coo ads from our members</p>
            </div>
          </div>

          <button
            type="button"
            role="presentation"
            className="owl-prev   owl-prev1"
            onClick={() => {
              console.log(slider?.current);
              slider?.current?.slickPrev();
            }}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            type="button"
            role="presentation"
            className="owl-next  owl-next-1 "
            onClick={() => slider?.current?.slickNext()}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div>
              <Slider ref={slider} {...settings} className=" featured-slider grid-view">
                {cartApi.map((item) => (
                  <div key={item.id} className="card aos" data-aos="fade-up">
                    <div className="blog-widget">
                      <div className="blog-img">
                        {/* <Link to="/service-details"> */}
                        <Link to="/routes">

                            {/* Feature_Ads */}
                          <img src={item.image_url} className="img-fluid" alt="blog-img" />
                        </Link>
                        <div className="fav-item">
                          <span className="Featured-text">Featured</span>
                        </div>
                      </div>
                      <div className="bloglist-content">
                        <div className="card-body">
                          <div className="blogfeaturelink"></div>
                          <h6>
                           
                            <Link to="/service-details">{item.book_title}</Link>
                          </h6>
                             Education | Education 
                          <div className="blog-location-details ">
                            <div className="location-info  mt-2">{item.location}</div>
                          </div>
                          <div className="amount-details">
                            <div className="amount">
                              <span className="validrate">{item.price}</span>
                            </div>
                            <div className="ratings">{item.time_ago}</div>
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
      </div>
    </section>
  );
}
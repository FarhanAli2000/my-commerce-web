import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import image from "./image.png";

import { db } from "./../../Firebase/FirebaseConfig.jsx";
import { getDocs, collection } from "firebase/firestore";

export default function Carousel() {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch ads from Firestore
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const adsCollection = collection(db, "ads"); // Get reference to the 'ads' collection
        const adsSnapshot = await getDocs(adsCollection); // Fetch the data
        console.log(adsSnapshot.docs, "adsSnapshot____________");
        const adsList = adsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(), // Spread the document data
        }));
        console.log(adsList, "adsSnapshot____________1");

        setAds(adsList); // Set the state with the ads data
        setLoading(false); // Stop loading when data is fetched
      } catch (error) {
        console.error("Error fetching ads:", error);
        setLoading(false);
      }
    };

    fetchAds();
  }, []);
  // const { cartApi, setCartApi } = useMyContext();

  // const fetchData = async () => {
  //   try {
  //     const response = await Product();
  //     setCartApi(response.data);
  //     // console.log("data", response.data);
  //   } catch (error) {
  //     console.log("error", error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

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

  const data = {
    books: [
      {
        id: 1,
        book_title: " Gulfstream Ameri-lite",
        image_url: "https://via.placeholder.com/150?text=ML+Book",
        location: "New York, USA",
        price: "$39.99",
        time_ago: "1 DAY AGO",
      },
      {
        id: 2,
        book_title: " Gulfstream Ameri-lite",
        image_url: "https://via.placeholder.com/150?text=Physics+Book",
        location: "London, UK",
        price: "$49.99",
        time_ago: "1 DAY AGO",
      },
      {
        id: 3,
        book_title: " Gulfstream Ameri-lite",
        image_url: "https://via.placeholder.com/150?text=Maths+Book",
        location: "Berlin, Germany",
        price: "$59.99",
        time_ago: "1 DAY AGO",
      },
      {
        id: 4,
        book_title: " Gulfstream Ameri-lite",
        image_url: "https://via.placeholder.com/150?text=History+Book",
        location: "Tokyo, Japan",
        price: "$29.99",
        time_ago: "1 DAY AGO",
      },
      {
        id: 5,
        book_title: " Gulfstream Ameri-lite",
        image_url: "https://via.placeholder.com/150?text=Programming+Book",
        location: "Sydney, Australia",
        price: "$24.99",
        time_ago: "1 DAY AGO",
      },
      {
        id: 5,
        book_title: " Gulfstream Ameri-lite",
        image_url: "https://via.placeholder.com/150?text=Programming+Book",
        location: "Sydney, Australia",
        price: "$24.99",
        time_ago: "1 DAY AGO",
      },
    ],
  };

  // console.log("data", data);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  const slider = useRef();

  const dataBase = async () => {
    try {
      const response = await getDocs(collection(db, "ads"));
      response.forEach((doc) => {
        console.log("documents", doc.id, "=>", doc.data());
      });
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  dataBase();

  return (
    <section className="featured-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 aos aos-init aos-animate" data-aos="fade-up">
            <div className="section-heading">
              <h3>Feature Ads</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div>
              <Slider
                ref={slider}
                {...settings}
                className=" featured-slider grid-view"
              >
                {data.books.map((item) => (
                  <div key={item.id} className="card aos" data-aos="fade-up">
                    <div className="blog-widget">
                      <div className="blog-img">
                        <Link to={`/routes/${item.id}`}>
                          {/* Feature_Ads */}
                          <img
                            src={image}
                            className="img-fluid"
                            alt="blog-img"
                          />
                        </Link>
                        <div className="fav-item">
                          <span className="Featured-text">Featured</span>
                        </div>
                      </div>
                      <div className="bloglist-content">
                        <div className="card-body">
                          {/* <div className="blogfeaturelink"></div> */}
                          <h6>
                            <Link to="/index">{item.book_title}</Link>
                          </h6>
                          <p style={{ fontSize: "0.7rem", lineHeight: "none" }}>
                            Education | Education | Education
                          </p>
                          <div className="blog-location-details ">
                            <div
                              className="location-info  mt-2"
                              style={{ fontFamily: "Inter" }}
                            >
                              {item.location}
                            </div>
                          </div>
                          <div className="amount-details">
                            <div className="amount">
                              <span
                                className="validrate"
                                style={{ fontFamily: "Inter" }}
                              >
                                {item.price}
                              </span>
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

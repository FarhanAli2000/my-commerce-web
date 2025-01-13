import React from "react";
import Footer from "./footer/Footer";
import Header from "./header";
import img from "./home-07.jpg";
import tick from "./tick.png";
import bullet from "./bullet.png";
import profile from "./profileimage.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import { useMyContext } from "../store/Contexxt.store";
import arrow from "./Vector.png";
import left from "./left.png";
import right from "./right.png";
import share from "./sahere.png";
import report from "./report.png";
import carimg from "./carimg.png";
import image1 from "../../assets/img/banner/bannerimage1.png";
import image2 from "../../assets/img/banner/bannerimage2.png";
import image3 from "../../assets/img/banner/bannerimage3.png";
import image4 from "../../assets/img/banner/bannerimage4.png";
import ads from "./adsimg.png";

const Dynamic_Routes = () => {
  const { id } = useParams();
  const { cartApi } = useMyContext();

  console.log("dynamic route", id);

  const filtering = cartApi.filter((item) => item.id === id);

  console.log("filtering", filtering);

  const images = [carimg, carimg, carimg, carimg, carimg, carimg, carimg];
  const featuresData = [
    ["Ads", "Normal Condition", "Immobilizer Key", "Power Mirrors"],
    ["Ads", "Normal Condition", "Immobilizer Key", "Power Mirrors"],
    ["Ads", "Normal Condition", "Immobilizer Key", "Power Mirrors"],
  ];

  return (
    <>
      <div className="main-wrapper">
        <Header />

        {/* Banner Section */}
        <section className="banner-section">
          <div className="container">
            <div className="home-banner">
              <div className="home-banner-about">
                <div className="section-search aos r" data-aos="fade-up">
                  <p className="explore-text banner-text">
                    <span>Explore top-rated attractions</span>
                  </p>
                  <h1>
                    Let us help you <br />
                    <span>Find, Buy</span> & Own Dreams
                  </h1>
                  <p className="banner-para">
                    Countrys most loved and trusted classified ad listing
                    website classified ad.randomised words which don't look even
                    slightly Browse thousand of items near you.
                  </p>
                </div>

                <div className="bannerimages_wrapper">
                  <div className="wrapper_container">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                  </div>
                  <div className="wrapper_container">
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="container border border-primary h-auto containerWrapper"
          style={{ marginTop: "60px" }}
        >
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            {/* Breadcrumb buttons */}
            <div className="adsCategory_head">
              <button
                className="btn border me-2 mb-2 mb-sm-0"
                style={{ background: "#E9EEFF", fontWeight: "500" }}
              >
                Home
              </button>
              <span>
                <img src={arrow} alt="" />
              </span>
              <button
                className="btn border me-2 mb-2 mb-sm-0"
                style={{ background: "#E9EEFF", fontWeight: "500" }}
              >
                Automotive
              </button>
              <span>
                <img src={arrow} alt="" />
              </span>
              <button
                className="btn border me-2 mb-2 mb-sm-0"
                style={{ background: "#E9EEFF", fontWeight: "500" }}
              >
                All Cities
              </button>{" "}
              <span>
                <img src={arrow} alt="" />
              </span>
              <button
                className="btn border mb-sm-0"
                style={{ background: "#E9EEFF", fontWeight: "500" }}
              >
                Used Car for Sale
              </button>
              <span>
                <img src={arrow} alt="" />
              </span>
              <button
                className="btn border mb-2 mb-sm-0"
                style={{ background: "#E9EEFF", fontWeight: "500" }}
              >
                Mercedez Benz
              </button>
            </div>

            {/* Pagination buttons */}
            <div className="adsCategoryInfoheade2 ">
              <button
                className="btn me-2 mb-2 mb-sm-0"
                style={{
                  color: "#2D4495",
                  background: "white",
                  border: "2px solid #2D4495",
                }}
              >
                <span>
                  <img src={left} alt="left" />
                </span>
                Previous
              </button>
              <button
                className="btn mb-2 mb-sm-0"
                style={{
                  color: "#2D4495",
                  background: "white",
                  border: "2px solid #2D4495",
                }}
              >
                <span>
                  <img src={right} alt="left" />
                </span>
                Next
              </button>
            </div>
          </div>
          <hr
            style={{
              color: "#000000",
              marginTop: "24.83px",
              marginBottom: "24.3px",
            }}
          />

          {/* More buttons */}
          <h1 className="fw-bold" style={{ marginBottom: "24px" }}>
            Mercedez Benz
          </h1>
          <div className="head2_wrapper">
            <div className="CategoryInfodiv_btn2container">
              <button className="head2btn">
                <span>
                  <img src={left} alt="leftarrow" />
                </span>{" "}
                Favourite
              </button>
              <button className="head2btn">
                <span>
                  <img src={share} alt="share" />
                </span>
                Share
              </button>
              <button className="head2btn">
                <span>
                  <img src={report} alt="promote" />
                </span>
                Promote
              </button>
              <button className="head2btn">
                <span>
                  <img src={report} alt="report" />
                </span>
                Report
              </button>
            </div>

            {/* Posted time */}
            <div className="d-flex flex-wrap justify-content-end">
              <p
                style={{
                  color: "black",
                  fontWeight: "400",
                  marginBottom: "24.5px",
                }}
              >
                Posted 5 minutes ago
              </p>
            </div>
          </div>

          <div className="row border border-primary">
            {/*  */}
            <div className="col border border-primary container ">
              <div className="col border border-primary">
                <div>
                  <img
                    src={carimg}
                    className="w-md-24 h-auto"
                    alt=""
                    style={{
                      width: "100%",
                      height: "29rem",
                      marginTop: "1rem",
                      borderRadius: "0.3rem",
                    }}
                  />
                </div>
                <div className="multiplesimage-wrapper">
                  {images.map((img, index) => (
                    <div className="multiplesimage-wrapper-item" key={index}>
                      <img
                        src={img}
                        alt={`Car ${index + 1}`}
                        className="images"
                      />
                    </div>
                  ))}
                </div>
                <div className="row border border-primary info_wrapper ">
                  <div className="col">
                    <div className="table-responsive info_table">
                      <table className="table table-borderless">
                        <tbody className="info_body">
                          <tr>
                            <th className="table_text">Seller Type:</th>
                            <td className="table_text">Agency</td>
                            <th className="table_text">Registered City:</th>
                            <td className="table_text">Un-Registered</td>
                          </tr>
                          <tr>
                            <th className="table_text">Assembly:</th>
                            <td className="table_text">Imported</td>
                            <th className="table_text">Engine Capacity:</th>
                            <td className="table_text">1500CC </td>
                          </tr>
                          <tr>
                            <th className="table_text">Body Type:</th>
                            <td className="table_text">Cross-over</td>
                            <th className="table_text">Last Updated:</th>
                            <td className="table_text">Nov 26, 2024</td>
                          </tr>
                          <tr>
                            <th className="table_text">Condition:</th>
                            <td className="table_text">Used</td>
                            <th className="table_text">Exterior Color:</th>
                            <td className="table_text">Black</td>
                          </tr>
                          <tr>
                            <th className="table_text">Purpose:</th>
                            <td className="table_text">Sell</td>
                            <th className="table_text">Model:</th>
                            <td className="table_text">2022</td>
                          </tr>
                          <tr>
                            <th className="table_text">Color:</th>
                            <td className="table_text" colSpan={1}>
                              Black
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <h1 className="mb-3" style={{ paddingLeft: "15px" }}>
                        Features
                      </h1>
                      <div className="row">
                        {featuresData.map((column, columnIndex) => (
                          <div className="col-md-4" key={columnIndex}>
                            {column.map((feature, index) => (
                              <p className="feature_para " key={index}>
                                <span className="second_tableIcon">
                                  <img src={tick} alt="tick" />
                                </span>
                                {feature}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>

                      <div className="descriptions_wrapper">
                        <h1 className="fw-bold" style={{ padding: "20px" }}>
                          Description:
                        </h1>
                        <p className="descriptions_para">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repellat nulla architecto molestias officiis,
                          quis incidunt fugiat fugit pariatur voluptatum
                          possimus modi repellendus dignissimos!
                        </p>
                        <p className="descriptions_para">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Tempora impedit ea deserunt, possimus totam
                          repellendus asperiores sequi? Debitis maxime optio
                          unde nemo explicabo?
                        </p>
                        <p className="descriptions_para">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Tempora impedit ea deserunt, possimus totam
                          repellendus asperiores sequi? Debitis maxime optio
                          unde nemo explicabo?
                        </p>
                        <p className="descriptions_para">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Tempora impedit ea deserunt, possimus totam
                          repellendus asperiores sequi? Debitis maxime optio
                          unde nemo explicabo?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 border border-primary leftCard responsive_card">
              <div className="profileInfo_div">
                <h1 className="infodev_price">1999,000$</h1>
                <div className="profile_div1">
                  <h5>Safety Tips</h5>
                  <ul
                    style={{
                      listStyleImage: `url(${bullet})`,
                      marginLeft: "1.3rem",
                    }}
                  >
                    <li className="safteytip_para">
                      Meet seller at a safe place.
                    </li>
                    <li className="safteytip_para">
                      Check item before you buy
                    </li>
                    <li className="safteytip_para">
                      Pay only after collecting item.
                    </li>
                  </ul>
                </div>
                <hr className="fw-bold" />
                <div className="col-md profile_div2">
                  <h1 className="sallerinfo_para">Seller Information</h1>
                  <div className="row profileinner_container ">
                    <div className="col-5 profileimg ">
                      <img
                        src={profile}
                        alt="Profile"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="col-5 profile_rightbarTags">
                      <p className="sallerInfo_para">Philp Martin</p>
                      <p className="sallerInfo_para">Member Since</p>
                      <p className="s allerInfo_para">View all Ads</p>
                    </div>

                    <div className="col mt-3 innerContainer2">
                      <button
                        className="hovering"
                        style={{
                          color: "rgb(45, 68, 149)",
                          border: "2px solid rgb(45, 68, 149)",
                          background: "white",
                          borderRadius: "12px",
                          width: "135px",
                          height: "45px",
                          marginRight: "22px",
                        }}
                      >
                        <span>
                          <FaMobile />
                        </span>{" "}
                        phone
                      </button>

                      <button
                        className="hovering"
                        style={{
                          color: "rgb(45, 68, 149)",
                          border: "2px solid rgb(45, 68, 149)",
                          background: "white",
                          borderRadius: "12px",
                          width: "135px",
                          height: "45px",
                        }}
                      >
                        <span>
                          <FontAwesomeIcon icon={faPhone} />
                        </span>
                        Call
                      </button>

                      <div>
                        <button className="whatsapp-button">
                          <span>
                            <FaWhatsapp />
                          </span>
                          whatsapp
                        </button>
                      </div>

                      <h5 className="mt-4 mb-4">Location </h5>

                      <button className="location_btn ">
                        Sheikh Zayed, Dubai
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-1 border border-primary w-100 ads_features_wrapper ">
              <div className="col border border-primary ">
                <img
                  className="img-fluid_ads mt-3 "
                  style={{ borderRadius: "0.3rem" }}
                  src={ads}
                  alt=""
                />
                <img
                  className="img-fluid_ads mt-3"
                  style={{ borderRadius: "0.3rem" }}
                  src={ads}
                  alt=""
                />
              </div>
              <div>
                <h5 className="morefeatures_para">More Features</h5>
                <p className="morefeatures_para">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque ipsam aperiam vero officia praesentium facilis.
                </p>

                <div className="row">
                  <button
                    className="hovering"
                    style={{
                      color: "white",
                      border: "2px solid rgb(45, 68, 149)",
                      background: "#2D4495",
                      borderRadius: "0.7rem",
                      width: "7rem",
                      height: "2rem",
                      margin: "1.3rem",
                    }}
                  >
                    Loresm
                  </button>

                  <button
                    className="hovering"
                    style={{
                      color: "white",
                      border: "2px solid rgb(45, 68, 149)",
                      background: "#2D4495",
                      borderRadius: "0.7rem",
                      width: "7rem",
                      height: "2rem",
                      margin: "1.3rem",
                    }}
                  >
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Dynamic_Routes;

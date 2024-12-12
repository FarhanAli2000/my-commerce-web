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

const Dynamic_Routes = () => {
  const { id } = useParams();
  const { cartApi } = useMyContext();

  console.log("dynamic  route", id);

  const filtering = cartApi.filter((item) => item.id === id);

  console.log("filtering", filtering);

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <div
          className="container border border-primary h-auto"
          style={{ marginTop: "16rem" }}
        >
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            {/* Breadcrumb buttons */}
            <div className="d-flex flex-wrap">
              <button
                className="btn border me-2 mb-2 mb-sm-0"
                style={{ background: "#E9EEFF", fontWeight: "500" }}
              >
                Home
              </button>
              <span className="me-2">&#x203A;</span>
              <button
                className="btn border me-2 mb-2 mb-sm-0"
                style={{ background: "#E9EEFF", fontWeight: "500" }}
              >
                Automotive
              </button>
              <span className="me-2">&#x203A;</span>
              <button
                className="btn border me-2 mb-2 mb-sm-0"
                style={{ background: "#E9EEFF", fontWeight: "500" }}
              >
                All Cities
              </button>
              <span className="me-2">&#x203A;</span>
              <button
                className="btn border mb-2 mb-sm-0"
                style={{ background: "#E9EEFF", fontWeight: "500" }}
              >
                Used Car for Sale
              </button>
              <span className="me-2">&#x203A;</span>
              <button
                className="btn border mb-2 mb-sm-0"
                style={{ background: "#E9EEFF", fontWeight: "500" }}
              >
                Mercedez Benz
              </button>
            </div>

            {/* Pagination buttons */}
            <div className="d-flex flex-wrap justify-content-end mt-3 mt-sm-0">
              <button
                className="btn me-2 mb-2 mb-sm-0"
                style={{
                  color: "#2D4495",
                  background: "white",
                  border: "2px solid #2D4495",
                }}
              >
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
                Next
              </button>
            </div>
          </div>
          <hr style={{ color: "black", height: "0.3rem" }} />

          {/* More buttons */}

          <>
            <p className="fw-bold">title</p>
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex flex-wrap">
                <button
                  className="btn border me-2 mb-2 mb-sm-0"
                  style={{ background: "#E9EEFF", fontWeight: "500" }}
                >
                  Favourite
                </button>
                <button
                  className="btn border me-2 mb-2 mb-sm-0"
                  style={{ background: "#E9EEFF", fontWeight: "500" }}
                >
                  Automotive
                </button>
                <button
                  className="btn border me-2 mb-2 mb-sm-0"
                  style={{ background: "#E9EEFF", fontWeight: "500" }}
                >
                  Share
                </button>
                <button
                  className="btn border me-2 mb-2 mb-sm-0"
                  style={{ background: "#E9EEFF", fontWeight: "500" }}
                >
                  Promote
                </button>
                <button
                  className="btn border mb-2 mb-sm-0"
                  style={{ background: "#E9EEFF", fontWeight: "500" }}
                >
                  Report
                </button>
              </div>

              {/* Posted time */}
              <div className="d-flex flex-wrap justify-content-end mt-3 mt-sm-0">
                <p style={{ color: "black", fontWeight: "400" }}>
                  Posted 5 minutes ago
                </p>
              </div>
            </div>
          </>

          <div className="row border border-primary">
            {/*  */}
            <div className="col  border  border-primary ">
              <div className="col  border  border-primary">
                <div>
                  <img
                    src={img}
                    className="w-md-24  h-auto"
                    alt=""
                    style={{
                      width: "100%",
                      height: "29rem",
                      marginTop: "1rem",
                      borderRadius: "0.3rem",
                    }}
                  />
                </div>
                <div>
                  <img
                    src={img}
                    className="w-md-5 mt-1  h-auto  imgs"
                    alt=""
                    style={{
                      width: "7rem",
                      borderRadius: "0.3rem",
                      margin: "0.76rem",
                    }}
                  />
                  <img
                    src={img}
                    className="w-md-5 mt-1  h-auto  imgs"
                    alt=""
                    style={{
                      width: "7rem",
                      borderRadius: "0.3rem",
                      margin: "0.76rem",
                    }}
                  />
                  <img
                    src={img}
                    className="w-md-5 mt-1  h-auto  imgs"
                    alt=""
                    style={{
                      width: "7rem",
                      borderRadius: "0.3rem",
                      margin: "0.76rem",
                    }}
                  />
                  <img
                    src={img}
                    className="w-md-5 mt-1  h-auto  imgs"
                    alt=""
                    style={{
                      width: "7rem",
                      borderRadius: "0.3rem",
                      margin: "0.76rem",
                    }}
                  />
                  <img
                    src={img}
                    className="w-md-5 mt-1  h-auto  imgs"
                    alt=""
                    style={{
                      width: "7rem",
                      borderRadius: "0.3rem",
                      margin: "0.76rem",
                    }}
                  />
                  <img
                    src={img}
                    className="w-md-5 mt-1  h-auto  imgs"
                    alt=""
                    style={{
                      width: "7rem",
                      borderRadius: "0.3rem",
                      margin: "0.76rem",
                    }}
                  />
                  <img
                    src={img}
                    className="w-md-5 mt-1  h-auto  imgs"
                    alt=""
                    style={{
                      width: "7rem",
                      borderRadius: "0.3rem",
                      margin: "0.76rem",
                    }}
                  />
                </div>

                <div className="row border border-primary">
                  <div className="col">
                    <div className="table-responsive">
                      <table className="table table-borderless">
                        <tbody>
                          <tr>
                            <th>Seller Type:</th>
                            <td>Agency</td>
                            <th>Registered City:</th>
                            <td>Un-Registered</td>
                          </tr>
                          <tr>
                            <th>Assembly:</th>
                            <td>Imported</td>
                            <th>Engine Capacity:</th>
                            <td>1500CC</td>
                          </tr>
                          <tr>
                            <th>Body Type:</th>
                            <td>Cross-over</td>
                            <th>Last Updated:</th>
                            <td>Nov 26, 2024</td>
                          </tr>
                          <tr>
                            <th>Condition:</th>
                            <td>Used</td>
                            <th>Exterior Color:</th>
                            <td>Black</td>
                          </tr>
                          <tr>
                            <th>Purpose:</th>
                            <td>Sell</td>
                            <th>Model:</th>
                            <td>2022</td>
                          </tr>
                          <tr>
                            <th>Color:</th>
                            <td colSpan={3}>Black</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <h1 className="mb-3" style={{ padding: "15px" }}>
                        Features
                      </h1>
                      <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-4">
                          <p className="fw-bold" style={{ padding: "15px" }}>
                            <icon>
                              <img src={tick} alt="tick" />
                            </icon>{" "}
                            Ads
                          </p>
                          <p className="fw-bold" style={{ padding: "15px" }}>
                            <icon>
                              <img src={tick} alt="tick" />
                            </icon>{" "}
                            Normal Condition
                          </p>
                          <p className="fw-bold" style={{ padding: "15px" }}>
                            <icon>
                              <img src={tick} alt="tick" />
                            </icon>{" "}
                            Immobilizer Key
                          </p>
                          <p className="fw-bold" style={{ padding: "15px" }}>
                            <icon>
                              <img src={tick} alt="tick" />
                            </icon>{" "}
                            Power Mirrors
                          </p>
                        </div>

                        {/* Column 2 */}
                        <div className="col-md-4">
                          <p className="fw-bold" style={{ padding: "15px" }}>
                            <icon>
                              <img src={tick} alt="tick" />
                            </icon>{" "}
                            Ads
                          </p>
                          <p className="fw-bold" style={{ padding: "15px" }}>
                            <icon>
                              <img src={tick} alt="tick" />
                            </icon>{" "}
                            Normal Condition
                          </p>
                          <p className="fw-bold" style={{ padding: "15px" }}>
                            <icon>
                              <img src={tick} alt="tick" />
                            </icon>{" "}
                            Immobilizer Key
                          </p>
                          <p className="fw-bold" style={{ padding: "15px" }}>
                            <icon>
                              <img src={tick} alt="tick" />
                            </icon>{" "}
                            Power Mirrors
                          </p>
                        </div>

                        {/* Column 3 */}
                        <div className="col-md-4">
                          <p className="fw-bold" style={{ padding: "15px" }}>
                            <icon>
                              <img src={tick} alt="tick" />
                            </icon>{" "}
                            Ads
                          </p>
                          <p className="fw-bold" style={{ padding: "15px" }}>
                            <icon>
                              <img src={tick} alt="tick" />
                            </icon>{" "}
                            Normal Condition
                          </p>
                          <p className="fw-bold" style={{ padding: "15px" }}>
                            <icon>
                              <img src={tick} alt="tick" />
                            </icon>{" "}
                            Immobilizer Key
                          </p>
                          <p className="fw-bold" style={{ padding: "15px" }}>
                            <icon>
                              <img src={tick} alt="tick" />
                            </icon>{" "}
                            Power Mirrors
                          </p>
                        </div>
                      </div>

                      {/*  */}

                      <h1 className="fw-bold" style={{ padding: "15px" }}>
                        Description:
                      </h1>
                      <p className="fw-bold" style={{ padding: "15px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eos distinctio soluta quasi? Quos tenetur nostrum
                        dicta, autem odio eveniet ducimus. Perspiciatis, dolore
                        atque!
                      </p>
                      <p className="fw-bold" style={{ padding: "15px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat nulla architecto molestias officiis, quis
                        incidunt fugiat fugit pariatur voluptatum possimus modi
                        repellendus dignissimos!
                      </p>
                      <p className="fw-bold" style={{ padding: "15px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora impedit ea deserunt, possimus totam repellendus
                        asperiores sequi? Debitis maxime optio unde nemo
                        explicabo?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-md-2  border border-primary w-25 h-25  second-div-category ">
              <div>
                <h1
                  className="mt-5"
                  style={{ color: "#2D4495", textAlign: "center" }}
                >
                  1999,000$
                </h1>
                <h5>Saftey Tips</h5>
                <ul
                  style={{
                    listStyleImage: `url(${bullet})`,
                    marginLeft: "1.3rem",
                  }}
                >
                  <li>Item</li>
                  <li>Another Item</li>
                  <li>Yet Another Item</li>
                </ul>
                <hr className="fw-bold" />
                <div className="col-md  border  border-primary">
                  <div className="row border border-primary ">
                    <div className="col-5">
                      <img
                        src={profile}
                        alt="Profile"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="col-5">
                      <p className="fw-light">Philp Martin</p>
                      <p className="fw-light">Member Since 2024</p>
                      <p className="fw-light">View all Ads</p>
                    </div>

                    <div className="col  mt-3">
                      {/* btn */}

                      <button
                        className="hovering"
                        style={{
                          color: "rgb(45, 68, 149)",
                          border: "2px solid rgb(45, 68, 149)",
                          background: "white",
                          borderRadius: "0.3rem",
                          width: "auto",
                          height: "auto",
                          margin: "0.3rem",
                        }}
                      >
                        <icon>
                          <FaMobile />
                        </icon>{" "}
                        phone
                      </button>

                      {/* btn */}

                      <button
                        className="hovering"
                        style={{
                          color: "rgb(45, 68, 149)",
                          border: "2px solid rgb(45, 68, 149)",
                          background: "white",
                          borderRadius: "0.3rem",
                          width: "auto",
                          height: "auto",
                          margin: "0.3rem",
                        }}
                      >
                        <icon>
                          <FaWhatsapp />
                        </icon>{" "}
                        whatsapp
                      </button>

                      {/* btn */}

                      <button
                        className="hovering"
                        style={{
                          color: "rgb(45, 68, 149)",
                          border: "2px solid rgb(45, 68, 149)",
                          background: "white",
                          borderRadius: "0.3rem",
                          width: "auto",
                          height: "auto",
                          margin: "0.3rem",
                        }}
                      >
                        <icon>
                          <FontAwesomeIcon icon={faPhone} />
                        </icon>
                        phone
                      </button>

                      <h5 className="mt-4  mb-4">Location </h5>

                      <button
                        className="hovering "
                        style={{
                          color: "rgb(45, 68, 149)",
                          border: "2px solid rgb(45, 68, 149)",
                          background: "white",
                          borderRadius: "0.3rem",
                          width: "18rem",
                          height: "3rem",
                          margin: "0.3rem",
                        }}
                      >
                        Sheikh Zayed,dubai
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-1  border  border-primary  w-100 ">
                <div className="col border border-primary  ">
                  <img
                    className="img-fluid mt-3 "
                    style={{ borderRadius: "0.3rem" }}
                    src={img}
                    alt=""
                  />
                  <img
                    className="img-fluid mt-3"
                    style={{ borderRadius: "0.3rem" }}
                    src={img}
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="mt-2">More Features</h5>
                  <p className="fw-bold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque ipsam aperiam vero officia praesentium facilis.
                  </p>
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

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Amexpay,
  Applepay,
  CallCallingSvg,
  FooterLogo,
  Gpay,
  Master,
  Phone,
  SmsTracking,
  Visa,
} from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
// import image from "./Group 164.png";
// import image2 from "./Help Section.png";
import gmail   from  "./gmail.png"
import whatapp   from "./whatapp.png"
import googlebutton  from "./Google button.png"
import mobileimage  from "./mobileimg.png"
import  appstore  from "./Appstore.png"
import  arrowimage  from "./arrow.png"
import scanner  from "./scanner.png"
import  KSA  from "./Logo ksa.svg"




const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <footer>
      <div className="footer">
        {/* <div className="container">
        <div className="stay-tuned">
          <h3>Stay Tuned With Us</h3>
          <p>
            Subcribe to our newletter and never miss our latest news and
            promotions. Our newsletter is sent once a week, every thursday.
          </p>
          <form>
            <div className="form-group">
              <div className="group-img">
                <i className="feather-mail"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              {" "}
              Subscribe
            </button>
          </form>
        </div>
      </div> */}


       {/* footer_top */}

       <div className="topfooter_wrapper">
          <div className="topfooter_container1">
               <h4 className="topfooter_heading1">GET KSA4SALES APP</h4>
               <h4 className="topfooter_heading2">The  best  for  is  just  one  click  away</h4>
               <div className="topfooter_soc">
                 <i  > <img src={googlebutton} alt="" className="topfooter-socialimg" /></i>
                 <i  ><img src={appstore} alt=""className="topfooter-socialimg" /></i>
               </div>
          </div>
           <div className="topfooter_qrcodescanner">
                <div className="qrcodescanner_socs">
                    <i className="topfooter_arrow"><img src={arrowimage} alt="" /></i>
                    <i className="topfooterscanner"><img src={scanner} alt="" /></i>
                </div>
                 <div className="para_div">
                   <p className="qrcodepara">Scan  the Qr  to</p>
                   <p className="qrcodepara">get  the  app</p>
                 </div>
           </div>
           <div className="topfooter-mobileimage">
              <i  className="topfooter-mob"><img src={mobileimage} alt="" /></i>
           </div>

       </div>


        {/* footer mid */}

        <div className="footermid-wrapper">
          <div className="footermid-container">
            <h3 className="footermid-heading">We are always here to help</h3>
            <div className="footermidinfo-container">
              <div className="midfooterinfo">
              <i className="midfooterinfo-icon" ><img src={gmail} alt="" /></i>
                <div className="footermidgmail">
                  <h4 className="footermidgmailheading">Email support</h4>
                  <p className="footermid-para">emailsupport@Ksa4sale.com</p>
                </div>
              </div>
              <div className="midfooterinfo">
                 <i  className="midfooterinfo-icon"><img src={whatapp} alt="" /></i>
                <div className="footermidgmail">
                  <h4 className="footermidgmailheading">Email support</h4>
                  <p className="footermid-para">emailsupport@Ksa4sale.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="footer-top aos  footer_shadow" data-aos="fade-up">
          <div className="container">
            <div className="row" style={{ gap: "1.7rem" }}>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link to="#">
                      <img src={KSA} alt="logo" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt et magna aliqua.{" "}
                    </p>
                    <p> The Best deal for you in one Click</p>
                    <div className="socialicons">
                      <i className="footer_socialsIcons"></i>
                      <i className="footer_socialsIcons"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">About us</h2>
                  <ul>
                    <li>
                      <Link to="/about">Our product</Link>
                    </li>
                    <li>
                      <Link to="#">Documentation</Link>
                    </li>
                    <li>
                      <Link to="/service-details">Our Services</Link>
                    </li>
                    <li>
                      <Link to="#">Get Started Us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Quick links</h2>
                  <ul>
                    <li>
                      <Link to="#">Market Place</Link>
                    </li>
                    <li>
                      <Link to="#">Documentation</Link>
                    </li>
                    <li>
                      <Link to="#">Customers</Link>
                    </li>
                    <li>
                      <Link to="#">Carriers</Link>
                    </li>
                    <li>
                      <Link to="/blog-list">Our Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Top Cities</h2>
                  <ul>
                    <li>
                      <Link to="#">Manhatten</Link>
                    </li>
                    <li>
                      <Link to="#">Los Angeles</Link>
                    </li>
                    <li>
                      <Link to="#">Houston</Link>
                    </li>
                    <li>
                      <Link to="#">Chicago</Link>
                    </li>
                    <li>
                      <Link to="#">Alabama</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Top Cities</h2>
                  <ul>
                    <li>
                      <Link to="#">Manhatten</Link>
                    </li>
                    <li>
                      <Link to="#">Los Angeles</Link>
                    </li>
                    <li>
                      <Link to="#">Houston</Link>
                    </li>
                    <li>
                      <Link to="#">Chicago</Link>
                    </li>
                    <li>
                      <Link to="#">Alabama</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="footer_end">
            <h6 className="footerend_para">
               All Copy Right  Reserved 2024-Ksa4sales
            </h6>
         </div>
         
      </div>
    </footer>
  );
};

export default Footer;

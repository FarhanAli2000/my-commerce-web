import React from "react";
import img from "./img.jpg";

const LatestBlog = () => {
  return (
    <div className="latestblog-wrapper">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>Latest Blog</h5>
          <button className="featuresection_btn">View All</button>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="image_box1 rounded-3 shadow-lg">
              <img
                src={img}
                alt="The Best Spa Saloon"
                className="w-100 rounded-top-3"
              />
              <h6 className="text-center  abc">The Best Spa Saloon</h6>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="image_box2 rounded-3 shadow-lg mb-4 overflow-hidden">
              <img src={img} alt="" className="w-100 h-100 object-cover" />
              <h6 className="text-center mt-3">Three Powerful Trick</h6>
            </div>
            <div className="image_box2 rounded-3 shadow-lg overflow-hidden">
              <img src={img} alt="" className="w-100 h-100 object-cover" />
              <h6 className="text-center mt-3">Three Powerful Trick</h6>
            </div>
          </div>
          <div className="col-md-3">
            <div className="image_box2 rounded-3 shadow-lg mb-4 overflow-hidden">
              <img src={img} alt="" className="w-100 h-100 object-cover" />
              <h6 className="text-center mt-3">Competitive Analysis</h6>
            </div>
            <div className="image_box2 rounded-3 shadow-lg overflow-hidden">
              <img src={img} alt="" className="w-100 h-100 object-cover" />
              <h6 className="text-center mt-3">Competitive Analysis</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;

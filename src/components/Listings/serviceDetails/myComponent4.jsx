import React from "react";
import {
  GalleryImg1,
  GalleryImg2,
  GalleryImg3,
  GalleryImg9,
} from "../../imagepath";
import { Link } from "react-router-dom";
import Lightbox from "react-lightbox";

const Roomsprofile = () => {
  const galleryItems = [
    { original: GalleryImg1 },
    { original: GalleryImg2 },
    { original: GalleryImg3 },
    { original: GalleryImg9 },
  ];

  return (
    <div className="row">
      {galleryItems.map((item, index) => (
        <div className="col-lg-3 col-md-3 col-sm-3" key={index}>
          <div className="review-gallery">
            <Link to="#" data-fancybox="gallery1">
              <Lightbox
                images={[{ src: item.original, title: `Image ${index + 1}` }]}
                renderImage={(image, index) => (
                  <img
                    className="img-fluid"
                    alt={`Image ${index + 1}`}
                    src={image.src}
                  />
                )}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Roomsprofile;

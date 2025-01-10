import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Add the Lightbox CSS
import {
  GalleryImg1,
  GalleryImg10,
  GalleryImg11,
  GalleryImg2,
  GalleryImg3,
  GalleryImg9,
} from "../../imagepath";

const Roomspics = () => {
  const galleryItems = [
    { original: GalleryImg1 },
    { original: GalleryImg2 },
    { original: GalleryImg3 },
    { original: GalleryImg11 },
    { original: GalleryImg9 },
    { original: GalleryImg10 },
    { original: GalleryImg11 },
    { original: GalleryImg2 },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="row">
      {galleryItems.map((item, index) => (
        <div className="col-lg-3 col-md-3 col-sm-3" key={index}>
          <div className="review-gallery">
            <Link to="#" onClick={() => openLightbox(index)}>
              <img className="img-fluid" alt="Image" src={item.original} />
            </Link>
          </div>
        </div>
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={galleryItems[currentImageIndex].original}
          nextSrc={
            galleryItems[(currentImageIndex + 1) % galleryItems.length].original
          }
          prevSrc={
            galleryItems[
              (currentImageIndex + galleryItems.length - 1) %
                galleryItems.length
            ].original
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setCurrentImageIndex(
              (currentImageIndex + galleryItems.length - 1) %
                galleryItems.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentImageIndex((currentImageIndex + 1) % galleryItems.length)
          }
        />
      )}
    </div>
  );
};

export default Roomspics;

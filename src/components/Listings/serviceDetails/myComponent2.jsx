import React, { useState } from "react";
import {
  gallery_1_jpg,
  gallery_2_jpg,
  gallery_3_jpg,
  gallery_4_jpg,
} from "../../imagepath";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Add the Lightbox CSS

const Rooms = () => {
  const galleryItems = [
    { original: gallery_1_jpg },
    { original: gallery_2_jpg },
    { original: gallery_3_jpg },
    { original: gallery_4_jpg },
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
    <div className="bannergallery-section">
      <div className="gallery-slider d-flex">
        {galleryItems.map((item, index) => (
          <div className="gallery-widget" key={index}>
            <Link to="#" onClick={() => openLightbox(index)}>
              <img className="img-fluid" alt="Image" src={item.original} />
            </Link>
          </div>
        ))}
      </div>

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

export default Rooms;

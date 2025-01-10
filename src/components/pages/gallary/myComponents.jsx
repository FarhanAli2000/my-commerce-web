import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GalleryImg1,
  GalleryImg2,
  GalleryImg3,
  GalleryImg9,
  gallery_1_jpg,
  gallery_2_jpg,
  gallery_3_jpg,
  gallery_4_jpg,
  gallery_5_jpg,
  galleryimage_1,
  galleryimage_10,
  galleryimage_12,
  galleryimage_2,
  galleryimage_3,
  galleryimage_4,
  galleryimage_5,
  galleryimage_6,
  galleryimage_7,
  galleryimage_8,
  galleryimage_9,
} from "../../imagepath";

// Alternative lightbox solution
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import styles

const Apps = () => {
  const galleryItems = [
    { original: galleryimage_1 },
    { original: galleryimage_2 },
    { original: galleryimage_3 },
    { original: galleryimage_4 },
    { original: galleryimage_5 },
    { original: galleryimage_6 },
    { original: galleryimage_7 },
    { original: galleryimage_8 },
    { original: galleryimage_9 },
    { original: galleryimage_10 },
    { original: galleryimage_12 },
    { original: galleryimage_3 },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="row">
      {galleryItems.map((item, index) => (
        <div className="col-lg-3 col-md-3 col-sm-3" key={index}>
          <div className="galleryimg">
            <Link
              to="#"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <img
                className="img-fluid"
                alt={`Image ${index + 1}`}
                src={item.original}
              />
            </Link>
          </div>
        </div>
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={galleryItems[photoIndex].original}
          nextSrc={
            galleryItems[(photoIndex + 1) % galleryItems.length].original
          }
          prevSrc={
            galleryItems[
              (photoIndex + galleryItems.length - 1) % galleryItems.length
            ].original
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + galleryItems.length - 1) % galleryItems.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % galleryItems.length)
          }
        />
      )}
    </div>
  );
};

export default Apps;

import React, { useState } from "react";
import "react-image-lightbox/style.css"; // Import styles
import Lightbox from "react-image-lightbox";
import { Link } from "react-router-dom";
import {
  GalleryImg1,
  GalleryImg10,
  GalleryImg2,
  GalleryImg9,
} from "../../imagepath";

const FancyIndex3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleryItems = [
    { src: GalleryImg1, alt: "Image 1" },
    { src: GalleryImg2, alt: "Image 2" },
    { src: GalleryImg9, alt: "Image 3" },
    { src: GalleryImg10, alt: "Image 4" },
  ];

  return (
    <div>
      <ul className="gallery-blk d-flex align-items-center">
        {galleryItems.map((item, index) => (
          <li key={index}>
            <Link
              to="#"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <img className="img-fluid" src={item.src} alt={item.alt} />
            </Link>
          </li>
        ))}
      </ul>

      {isOpen && (
        <Lightbox
          mainSrc={galleryItems[photoIndex].src}
          nextSrc={galleryItems[(photoIndex + 1) % galleryItems.length].src}
          prevSrc={
            galleryItems[
              (photoIndex + galleryItems.length - 1) % galleryItems.length
            ].src
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

export default FancyIndex3;

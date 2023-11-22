import React from "react";
import data from "../data";

function Gallery() {
  const galleryImages = data.map((image) => (
    <div className="gallery-img" key={image.id}>
      <img src={image.src} alt={image.alt} />
    </div>
  ));

  return <section className="gallery">{galleryImages}</section>;
}

export default Gallery;

import React from "react";

import natali1 from "../../../assets/images/profile_pix/natali1.jpeg";
import natali2 from "../../../assets/images/profile_pix/natali2.jpeg";
import natali3 from "../../../assets/images/profile_pix/natali3.jpeg";
import natali4 from "../../../assets/images/profile_pix/natali4.jpeg";
import natali5 from "../../../assets/images/profile_pix/natali5.jpeg";
import natali6 from "../../../assets/images/profile_pix/natali6.jpeg";
import natali7 from "../../../assets/images/profile_pix/natali7.jpeg";
import natali8 from "../../../assets/images/profile_pix/natali8.jpeg";
import natali9 from "../../../assets/images/profile_pix/natali9.jpeg";
import natali10 from "../../../assets/images/profile_pix/natali10.jpeg";
import natali11 from "../../../assets/images/profile_pix/natali11.jpeg";
import natali12 from "../../../assets/images/profile_pix/natali13.jpeg";

const PhotoAlbum = () => {
  return (
    <div className="gallery-row">
      <div className="gallery-column">
        <img src={natali1} alt="..." />
        <img src={natali2} alt="..." />
        <img src={natali3} alt="..." />
      </div>
      <div className="gallery-column">
        <img src={natali4} alt="..." />
        <img src={natali5} alt="..." />
        <img src={natali6} alt="..." />
      </div>

      <div className="gallery-column">
        <img src={natali7} alt="..." />
        <img src={natali8} alt="..." />
        <img src={natali9} alt="..." />
      </div>

      <div className="gallery-column">
        <img src={natali10} alt="..." />
        <img src={natali11} alt="..." />
        <img src={natali12} alt="..." />
      </div>
    </div>
  );
};

export default PhotoAlbum;

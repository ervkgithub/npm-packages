import React from "react";
import "./Banner.css";

export const Banner = (props) => {
  const Img_URL_Default =
    "https://thumbs.dreamstime.com/b/computer-cogs-technology-background-blue-banner-old-new-using-circuits-old-machine-31582628.jpg";
  return (
    <>
      <div className="banner-promo">
        <div
          className="banner-promo-bg"
          style={{ backgroundImage: "url(" + Img_URL_Default + ")" }}
        >
          <div className={`banner-content bg--${props.content_bg_color}  ${props.direction}`}>
            <h1>Banner Title Banner Title Banner</h1>
            <p>
              Banner desc Banner desc Banner desc Banner desc Banner desc Banner
              desc Banner desc Banner desc Banner desc Banner desc Banner desc
              Banner desc Banner desc Banner desc Banner desc Banner desc Banner
              desc Banner desc
            </p>
            <a href="https://thumbs.dreamstime.com/b/computer-cogs-technology-background-blue-banner-old-new-using-circuits-old-machine-31582628.jpg">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

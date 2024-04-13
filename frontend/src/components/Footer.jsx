import React from "react";
import "../css/footer.css";
import fb from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/LinkedIn.png";
import insta from "../assets/insta.jpg";

const footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>Home</h4>
            <a href="/employer">
              <p>Categories</p>
            </a>
            <a href="/heakthplan">
              <p>Devices</p>
            </a>
            <a href="/individual">
              <p>FAQ</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>Movies</h4>
            <a href="/resource">
              <p>Genres</p>
            </a>
            <a href="/resource">
              <p>Trending</p>
            </a>
            <a href="/resource">
              <p>New Realease</p>
            </a>
            <a href="/resource">
              <p>Popular</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>Shows</h4>
            <a href="/about">
              <p>Genres</p>
            </a>
            <a href="/press">
              <p>Trending</p>
            </a>
            <a href="/career">
              <p>New Release</p>
            </a>
            <a href="/contact">
              <p>Popular</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>Support</h4>
            <a href=""> ottwebsite@gmail.com</a>
          </div>

          <div className="sb_footer-links_div">
            <h4>Subscription</h4>
            <a href="/about">
              <p>Plans</p>
            </a>
            <a href="/press">
              <p>Features</p>
            </a>
          </div>



          <div className="sb_footer-links_div">
            <h4>Connect with Us</h4>
            <div className="socialmedia">
              <p>
                <img src={fb} alt="" />
              </p>
              <p>
                <img src={twitter} alt="" />
              </p>
              <p>
                <img src={linkedin} alt="" />
              </p>
              <p>
                <img src={insta} alt="" />
              </p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} OttWebsite. All Rights reserved.</p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy Policy</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Policy</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;

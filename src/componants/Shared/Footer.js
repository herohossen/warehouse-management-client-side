import React from "react";
import "../../styles/Shared/Footer.css";
const Footer = () => {
  return (
    <div>
      {/* <section>Footer Example 4</section> */}
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>TecMania</h3>

          <p className="footer-links">
            {/* <a href="#" class="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
			*/}
          </p>

          <p className="footer-company-name"></p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>444 S. Cedros Ave</span> Dhaka, Bangladesh
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@mail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-company-about">
            {" "}
            <span>About Us</span>
            <p>We serve the best produts</p>
          </div>

          <div className="footer-icons">
            {/* <a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

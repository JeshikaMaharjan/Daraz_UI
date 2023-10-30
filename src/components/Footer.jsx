import "../styles/footer.css";
import pakistan from "../assets/flags/pakistan.png";
import bangladesh from "../assets/flags/bangladesh.png";
import srilanka from "../assets/flags/srilanka.png";
import myanmar from "../assets/flags/myanmar.png";
import nepal from "../assets/flags/nepal.png";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import esewa from "../assets/esewa.png";
import qr from "../assets/qr.png";
import appgallery from "../assets/appgallery.png";
import applestore from "../assets/applestore.png";
import googleplay from "../assets/googleplay.png";
import socialmedia from "../assets/socialmedia.jpg";
export default function Footer() {
  return (
    <>
      <div className=" footer-container">
        <div className="customerCare">
          <h3>Customer Care</h3>
          <p>Help Center </p>
          <p>How to Buy </p>
          <p>Returns & Refunds </p>
          <p>Contact Us</p>
        </div>
        <div className="earnWithDaraz">
          <h3>Earn with Daraz</h3>
          <p>Daraz University </p>
          <p>Sell on Daraz </p>
          <p>Code of Conduct</p>
        </div>
        <div className="daraz">
          <h3>Daraz</h3>
          <p>About Daraz </p>
          <p>Careers </p>
          <p>Daraz Blog </p>
          <p>Terms & Conditions </p>
          <p>Privacy Policy </p>
          <p>Digital Payments </p>
          <p>Daraz Customer University </p>
          <p>Daraz Affiliate Program </p>
          <p>Review & Win </p>
          <p>Meet the winners</p>
        </div>
        <div className="darazInternational">
          <h3>Daraz International</h3>
          <div className="country">
            <img src={pakistan} />
            <p>Pakistan</p>
            <img src={bangladesh} />
            <p>Bangladesh</p>
            <img src={srilanka} />
            <p>SriLanka</p>
            <img src={myanmar} />
            <p>Myanmar</p>
            <img src={nepal} />
            <p>Nepal</p>
          </div>
        </div>
        <div className="paymentMethods">
          <h3>Payment Methods</h3>
          <img src={visa} />
          <img src={mastercard} />
          <img src={esewa} />
        </div>
        <div className="exclusiveDeals">
          <h3>Exclusive Deals</h3>
          <div className="exclusiveInner">
            <div className="qr">
              <img src={qr} />
            </div>
            <div className="appImages">
              <img src={appgallery} />
              <img src={applestore} />
              <img src={googleplay} />
            </div>
          </div>
        </div>
        <div className="followUs">
          <h3>Follow Us</h3>
          <img src={socialmedia} />
        </div>
      </div>
    </>
  );
}

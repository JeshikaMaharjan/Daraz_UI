import "../styles/footer.css";

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
            <img src="../assets/flags/pakistan.png" />
            <p>Pakistan</p>
            <img src="../assets/flags/bangladesh.png" />
            <p>Bangladesh</p>
            <img src="../assets/flags/srilanka.png" />
            <p>SriLanka</p>
            <img src="../assets/flags/myanmar.png" />
            <p>Myanmar</p>
            <img src="../assets/flags/nepal.png" />
            <p>Nepal</p>
          </div>
        </div>
        <div className="paymentMethods">
          <h3>Payment Methods</h3>
          <img src="../assets/visa.png" />
          <img src="../assets/mastercard.png" />
          <img src="../assets/esewa.png" />
        </div>
        <div className="exclusiveDeals">
          <h3>Exclusive Deals</h3>
          <div className="exclusiveInner">
            <div className="qr">
              <img src="../assets/qr.png" />
            </div>
            <div className="appImages">
              <img src="../assets/appgallery.png" />
              <img src="../assets/applestore.png" />
              <img src="../assets/googleplay.png" />
            </div>
          </div>
        </div>
        <div className="followUs">
          <h3>Follow Us</h3>
          <img src="../assets/socialmedia.jpg" />
        </div>
      </div>
    </>
  );
}

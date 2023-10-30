import "../styles/header.css";
import smallLogo from "../assets/smallLogo.png";
import darazlogo from "../assets/darazLogo.png";
import account from "../assets/account.png";
import language from "../assets/language.png";
import cart from "../assets/cart.png";

export default function Header() {
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var element = document.getElementsByClassName("linkList");
    var categories = document.getElementsByClassName("sidebar");
    // console.log(categories[0].getBoundingClientRect().bottom);
    if (categories[0].getBoundingClientRect().bottom < 100) {
      element[0].classList.add("removeLink");
    } else {
      element[0].classList.remove("removeLink");
    }
  }
  return (
    <>
      <div className="header-container">
        <div className="linkList">
          <div className="list">
            <p>Become a Seller</p>
            <p>Payments & Recharge</p>
            <p>Help & Support</p>
          </div>
          <div className="linkButton">
            {/* <img src="./assets/smallLogo.png" /> */}
            <img src={smallLogo} />
            <span>Save More on App</span>
          </div>
        </div>
        <div className="logo">
          <img src={darazlogo} />
        </div>
        <div className="searchBar">
          <input placeholder="Search in Daraz"></input>
        </div>
        <div className="account">
          <img src={account} />
          <div>
            <span>Hello,user.</span>
            <p>Orders & Account</p>
          </div>
        </div>
        <div className="language">
          <img src={language} />
          <span>EN</span>
        </div>
        <div className="cart">
          <img src={cart} />
        </div>
      </div>
    </>
  );
}

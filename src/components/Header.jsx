import "../styles/header.css";

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
            <img src="../src/assets/smallLogo.png" />
            <span>Save More on App</span>
          </div>
        </div>
        <div className="logo">
          <img src="./src/assets/darazLogo.png" />
        </div>
        <div className="searchBar">
          <input placeholder="Search in Daraz"></input>
        </div>
        <div className="account">
          <img src="../src/assets/account.png" />
          <div>
            <span>Hello,user.</span>
            <p>Orders & Account</p>
          </div>
        </div>
        <div className="language">
          <img src="../src/assets/language.png" />
          <span>EN</span>
        </div>
        <div className="cart">
          <img src="../src/assets/cart.png" />
        </div>
      </div>
    </>
  );
}

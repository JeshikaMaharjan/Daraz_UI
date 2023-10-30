import "./App.css";

import normalImage from "./assets/normalImage.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import JustForYou from "./components/JustForYou";
import Sidebar from "./components/Sidebar";
import SaleCard from "./components/SaleCard";
import Slideshow from "./components/Slideshow";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="slideshow">
            <Slideshow />
          </div>
          <div className="normalImage">
            <img src={normalImage} />
          </div>
          <div className="saleCard">
            <SaleCard />
          </div>
          <div className="categories">
            <Categories />
          </div>
          <div className="justForYou">
            <JustForYou />
          </div>
          <div className="loadMore">
            <p>LOAD MORE</p>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

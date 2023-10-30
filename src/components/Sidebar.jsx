import { useState } from "react";
import "../styles/sidebar.css";
import dress from "../assets/sidebar/dress.png";
import mensclothing from "../assets/sidebar/mens-clothing.png";
import camera from "../assets/sidebar/camera.png";
import wristwatch from "../assets/sidebar/wristwatch.png";
import groceries from "../assets/sidebar/groceries.png";
import teddybear from "../assets/sidebar/teddy-bear.png";
import sofa from "../assets/sidebar/sofa.png";
import basketball from "../assets/sidebar/basketball.png";
import car from "../assets/sidebar/car.png";
import beauty from "../assets/sidebar/beauty.png";
import Submenu from "./Submenu";
export default function Sidebar() {
  const items = [
    {
      name: "Women's Fashion",
      src: `${dress}`,
      submenu: [
        "Clothing",
        "Traditional Clothing",
        " Women's Bags",
        " Shoes",
        "Accessories",
        " Lingerie, Sleep & Lounge",
        "Girl's Fashion",
      ],
    },
    {
      name: "Health & Beauty",
      src: `${beauty}`,
      submenu: [
        "Bath & Body",
        "Beauty Tools",
        "Fragrances",
        "Hair Care",
        "Makeup",
        " Men's Care",
      ],
    },
    {
      name: "Men's Fashion",
      src: `${mensclothing}`,
      submenu: [
        "Clothing",
        "Men's Bags",
        "Shoes",
        "Accessories",
        "Boy's Fashion",
        "Men's Underwear",
      ],
    },
    {
      name: "Electronic Devices",
      src: `${camera}`,
      submenu: [
        "Smartphones",
        "Feature Phones",
        "Tablets",
        "Laptops",
        "Desktops",
        "Monitors",
        "Gaming Consoles",
        "Cameras",
        "Printers",
        "Daraz Like New",
      ],
    },
    {
      name: "Electronic Accessories",
      src: `${wristwatch}`,
      submenu: [
        "Smartphones",
        "Feature Phones",
        "Tablets",
        "Laptops",
        "Desktops",
        "Desktops",
        "All-In-One All-In-One",
      ],
    },
    {
      name: "Groceries & Pets",
      src: `${groceries}`,
      submenu: [
        "Groceries",
        "Beverages",
        "Breakfast, Choco & Snacks",
        "Food Staples",
        "Cooking Ingredients",
        "Laundry & Household",
        "Laundry & Household",
        "AirCare",
      ],
    },
    {
      name: "Babies & Toys",
      src: `${teddybear}`,
      submenu: [
        " Disposable Diapers",
        "Baby Gear",
        "Baby Personal Care",
        "Clothing & Accessories",
        "Diapering & Potty",
        "Feeding",
        "Nursery",
        "Baby & Toddler Toys",
        "Toys & Games",
        "Remote Control & Vehicles",
        "Sports & Outdoor Play",
      ],
    },
    {
      name: "Home & Lifestyle",
      src: `${sofa}`,
      submenu: [
        " Bath",
        "Bedding",
        "Decor",
        "Furniture",
        "Kitchen & Dining",
        "Bakeware Bakeware",
        "Coffee & Tea Coffee & Tea",
        "Tools, DIY & Outdoor",
        "Stationery & Craft",
        "Media, Music & Books",
      ],
    },
    {
      name: "Sports & Outdoor",
      src: `${basketball}`,
      submenu: [
        "Men Shoes & Clothing",

        "Clothing",
        "Shoes",
        "Accessories",
        "Bags",
        "Women Shoes & Clothing",
        "Outdoor Recreation",
        "Exercise & Fitness",
        "Water Sports",
        "Racket Sports",
        "Team Sports",
      ],
    },
    {
      name: "Motors,Tools and DIY",
      src: `${car}`,
      submenu: [
        " Automotive",
        "Motorcycles",
        "Auto Care",
        "Auto Electronics",
        "Moto Parts & Accessories",
        "Motorcycle Riding Gear",
        "Helmets",
        "Gloves",
        "Interior Accessories",
      ],
    },
  ];

  const [submenuActivate, setState] = useState(null);

  return (
    <>
      <div className="sidebar-container">
        {items.map((item, ind) => {
          return (
            <>
              <div className="sidebarComponent">
                <div className="imageContainer">
                  <img src={item.src} />
                </div>
                <p
                  onMouseOver={() => {
                    setState(ind);
                  }}
                  onMouseOut={() => {
                    setState(null);
                  }}
                >
                  {item.name}
                </p>
              </div>

              {submenuActivate == ind && (
                <>
                  <div className="submenu">
                    <Submenu menuItems={item.submenu} />
                  </div>
                </>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

import "../styles/categories.css";
import trimmer from "../assets/categories/trimmer.jpg";
import shapewear from "../assets/categories/shapewear.jpg";
import makeup from "../assets/categories/makeup.jpg";
import wallpaper from "../assets/categories/wallpaper.jpg";
import bathmats from "../assets/categories/bathmats.jpg";
import fitness from "../assets/categories/fitness.jpg";
import bath from "../assets/categories/bath.jpg";
import brush from "../assets/categories/brush.jpg";
import milk from "../assets/categories/milk.jpg";
import washing from "../assets/categories/washing.jpg";
import disposable from "../assets/categories/disposable.jpg";
import flashlights from "../assets/categories/flashlights.jpg";
import sleeves from "../assets/categories/sleeves.jpg";
import bottle from "../assets/categories/bottle.jpg";

export default function Categories() {
  const list = [
    {
      name: "Trimmers & Groomers",
      src: `${trimmer}`,
    },
    {
      name: "Shapewear",
      src: `${shapewear}`,
    },
    {
      name: "Makeup Remover",
      src: `${makeup}`,
    },
    {
      name: "Wallpaper",
      src: `${wallpaper}`,
    },
    {
      name: "Bath Mats",
      src: `${bathmats}`,
    },
    {
      name: "Fitness & Activity Trackers",
      src: `${fitness}`,
    },
    {
      name: "Bath Towels",
      src: `${bath}`,
    },
    {
      name: "Milk Frothers",
      src: `${milk}`,
    },
    {
      name: "Washing Machine Cleaner",
      src: `${washing}`,
    },
    {
      name: "Disposable Diapers",
      src: `${disposable}`,
    },
    {
      name: "Flashlights",
      src: `${flashlights}`,
    },
    {
      name: "Brushes",
      src: `${brush}`,
    },
    {
      name: "Sleeves",
      src: `${sleeves}`,
    },
    {
      name: "Bottle Care",
      src: `${bottle}`,
    },
  ];

  return (
    <>
      <div className="categories-container">
        <h2>Categories</h2>
        <div className="category-list">
          {list.map((item) => {
            return (
              <>
                <div className=" category-card">
                  <div className="img-container">
                    <img src={item.src} />
                  </div>
                  <p>{item.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

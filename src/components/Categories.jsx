import "../styles/categories.css";
export default function Categories() {
  const list = [
    {
      name: "Trimmers & Groomers",
      src: "trimmer.jpg",
    },
    {
      name: "Shapewear",
      src: "shapewear.jpg",
    },
    {
      name: "Makeup Remover",
      src: "makeup.jpg",
    },
    {
      name: "Wallpaper",
      src: "wallpaper.jpg",
    },
    {
      name: "Bath Mats",
      src: "bathmats.jpg",
    },
    {
      name: "Fitness & Activity Trackers",
      src: "fitness.jpg",
    },
    {
      name: "Bath Towels",
      src: "bath.jpg",
    },
    {
      name: "Milk Frothers",
      src: "milk.jpg",
    },
    {
      name: "Washing Machine Cleaner",
      src: "washing.jpg",
    },
    {
      name: "Disposable Diapers",
      src: "disposable.jpg",
    },
    {
      name: "Flashlights",
      src: "flashlights.jpg",
    },
    {
      name: "Brushes",
      src: "brush.jpg",
    },
    {
      name: "Sleeves",
      src: "sleeves.jpg",
    },
    {
      name: "Bottle Care",
      src: "bottle.jpg",
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
                    <img src={`../src/assets/categories/${item.src}`} />
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

import "../styles/justforyou.css";
export default function JustForYou() {
  const list = [
    {
      name: "Spunky Add-ons Lightning ",
      src: "spunky.webp",
      price: "Rs.159",
      discounted: "Rs 199 ",
      percent: "-20%",
      rating: "(240)",
    },
    {
      name: "Akatsuki anime Backpack ",
      src: "akatsuki.webp",
      price: "Rs.1059",
      discounted: "Rs 2999 ",
      percent: "-63%",
      rating: "(30)",
    },
    {
      name: "Moonstar Dual Tone Windcheater ",
      src: "moonstar.webp",
      price: "Rs.1259",
      discounted: "Rs 2999 ",
      percent: "-63%",
      rating: "(30)",
    },
    {
      name: "1 Piece Hand Cream ",
      src: "handcream.webp",
      price: "Rs.109",
      discounted: "Rs 299 ",
      percent: "-63%",
      rating: "(30)",
    },
    {
      name: "T500 Bluetooth Smart Watch ",
      src: "bluetooth.webp",
      price: "Rs.1059",
      discounted: "Rs 2999 ",
      percent: "-63%",
      rating: "(30)",
    },
    {
      name: "Sports Jersey Set Combo ",
      src: "sports.webp",
      price: "Rs.1059",
      discounted: "Rs 2999 ",
      percent: "-63%",
      rating: "(300)",
    },
    {
      name: "Blue color Golden Chain Designer Bag ",
      src: "bag.webp",
      price: "Rs.550",
      discounted: "Rs 999 ",
      percent: "-45%",
      rating: "(80)",
    },
    {
      name: "Mi standard Charger ",
      src: "akatsuki.webp",
      price: "Rs.959",
      discounted: "Rs 2999 ",
      percent: "-63%",
      rating: "(30)",
    },
    {
      name: "Blue Ray Cut Metal Frame ",
      src: "frame.webp",
      price: "Rs.1059",
      discounted: "Rs 2999 ",
      percent: "-63%",
      rating: "(30)",
    },
    {
      name: "Philips Air Fryer ",
      src: "airfryer.webp",
      price: "Rs.40,000",
      discounted: "Rs 5999 ",
      percent: "-30%",
      rating: "(30)",
    },
    {
      name: "Bahubali Jhumka ",
      src: "jhumka.webp",
      price: "Rs.509",
      discounted: "Rs 999 ",
      percent: "-63%",
      rating: "(30)",
    },
    {
      name: "Clear Case for Redmi ",
      src: "phonecase.webp",
      price: "Rs.1059",
      discounted: "Rs 2999 ",
      percent: "-63%",
      rating: "(30)",
    },
  ];
  return (
    <>
      <div className=" justforyou-container">
        <h2>Just For You</h2>
        <div className="justforyou-list">
          {list.map((item) => {
            return (
              <>
                <div className="justforyou-card">
                  <div className="jimg-container">
                    <img src={`../assets/justforyou/${item.src}`} />
                  </div>
                  <p>{item.name}</p>
                  <h4>{item.price}</h4>
                  <p>
                    <span className="discountedPrice">{item.discounted}</span>
                    <span>{item.percent}</span>
                  </p>
                  <div className="rating">
                    <img
                      className="ratingImg"
                      src={`../assets/justforyou/rating.jpg`}
                    />
                    <span className="ratingSpan">{item.rating}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

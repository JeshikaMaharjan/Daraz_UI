import "../styles/salecard.css";
export default function SaleCard() {
  const list = [
    {
      name: "Microfiber Towel/Dry Shower Caps ",
      src: "microfiber.jpg",
      price: "Rs.135",
      discounted: "Rs 299 ",
      percent: "-54%",
    },
    {
      name: "Electric Hot Water Bag with Fur Hand Pocket ",
      src: "electric.jpg",
      price: "Rs.239",
      discounted: "Rs 499 ",
      percent: "-63%",
    },
    {
      name: "Gemei Gm-1719 Hair Dryer-1800W ",
      src: "gemei.jpg",
      price: "Rs.798",
      discounted: "Rs 2999 ",
      percent: "-63%",
    },
    {
      name: "MuscleBlaze Creatine Monohydrate ",
      src: "muscleblaze.jpg",
      price: "Rs.109",
      discounted: "Rs 299 ",
      percent: "-63%",
    },
    {
      name: "I12 Pods Wireless Earbuds ",
      src: "ipods.jpg",
      price: "Rs.616",
      discounted: "Rs 2999 ",
      percent: "-63%",
    },
    {
      name: "Daewoo Excite Earbuds ",
      src: "earbuds.jpg",
      price: "Rs.1059",
      discounted: "Rs 2999 ",
      percent: "-63%",
    },
  ];

  return (
    <>
      <div className=" salecard-container">
        <h2>Flash Sale</h2>
        <div className="onSale">
          <span>On Sale Now</span>

          <span className="sbtn">SHOP MORE</span>
        </div>
        <div className="salecard-list">
          {list.map((item) => {
            return (
              <>
                <div className="salecard-card">
                  <div className="simg-container">
                    <img src={`../assets/salecard/${item.src}`} />
                  </div>
                  <p>{item.name}</p>
                  <h4>{item.price}</h4>
                  <p>
                    <span className="discountedPrice">{item.discounted}</span>
                    <span>{item.percent}</span>
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

// import { vodkaData,whiskyData } from "../menuData/menuData";

import { useEffect ,useState } from "react";

function Menu() {

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5001/api/menu")
        .then(res => res.json())
        .then(data => {
          console.log("MENU FROM BACKEND 👉", data);
          setMenuData(data);
        })
        .catch(err => console.error(err));
    }, []);

  
  return (
    <section className="menu">
      
      <div className="menu-bg">
        <h1>What we serve</h1>
        <h2>Our Menu</h2>
      </div>
      
        <div className="menu-items">

        {/* <h3 className="menu-category">Vodka</h3>
        <div className="vodka">
            {vodkaData.map((item, index) => (
            <div className="menu-item" key={index}>
                <img src="/images/vodka-placeholder.jpg" alt="Preview not available" />
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <p className="item-price">
                30ml – ₹{item.price["30ml"]} | 60ml – ₹{item.price["60ml"]}
                </p>
            </div>
            ))}
        </div> */}

        <h3 className="menu-category">Vodka</h3>
        <div className="vodka">
          {menuData
            .filter(item => item.category === "vodka")
            .map(item => (
              <div className="menu-item" key={item._id}>
                {/* <img src="/images/vodka-placeholder.jpg" alt="Preview not available" /> */}
                <img src={item.imageURL || "/images/vodka-placeholder.jpg"} alt={item.name}/>
                <h3 className="item-name">{item.name}</h3>

                <p className="item-price">
                  30ml – ₹{item.price.ml30} | 60ml – ₹{item.price.ml60}
                </p>
              </div>
            ))}
        </div>

        {/* <h3 className="menu-category">Whisky</h3>
        <div className="whisky">
            {whiskyData.map((item, index) => (
            <div className="menu-item" key={index}>
                <img src="/images/vodka-placeholder.jpg" alt="Preview not available" />
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <p className="item-price">
                30ml – ₹{item.price["30ml"]} | 60ml – ₹{item.price["60ml"]}
                </p>
            </div>
            ))}
        </div> */}
        <h3 className="menu-category">Whisky</h3>
        <div className="whisky">
          {menuData
            .filter(item => item.category === "whisky")
            .map(item => (
              <div className="menu-item" key={item._id}>
                <img src= {item.imageURL || "/images/whisky-placeholder.jpg"} alt={item.name} />
                <h3 className="item-name">{item.name}</h3>

                <p className="item-price">
                  30ml – ₹{item.price.ml30} | 60ml – ₹{item.price.ml60}
                </p>
              </div>
            ))}
        </div>

        </div>


    </section>
  );
}

export default Menu;
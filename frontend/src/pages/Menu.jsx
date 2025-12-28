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

            <h3 className="menu-category">Signature Vodkas</h3>
            <div className="menu-block reverse">

              <div className="menu-image">
                <img src="/images/vodka_placeholder.jpg" alt="Vodka section" />
              </div>


              <div className="menu-content">
                {menuData
                  .filter(item => item.category === "vodka")
                  .map(item => (
                    <div className="menu-item" key={item._id}>
                      
                      <div className="menu-row">
                        <span className="item-name">{item.name}</span>
                        <span className="item-line"></span>
                        <span className="item-price">
                          30ml – ₹{item.price.ml30} | 60ml – ₹{item.price.ml60}
                        </span>
                      </div>

                      <span className="item-description">
                        {item.description}
                      </span>

                    </div>
                  ))}
              </div>

            </div>

            <h3 className="menu-category">Premium Whiskeys</h3>
            <div className="menu-block">

              <div className="menu-image">
                <img src="/images/whisky_placeholder.jpg" alt="Whisky section" />
              </div>

              <div className="menu-content">
                {menuData
                  .filter(item => item.category === "whisky")
                  .map(item => (
                    <div className="menu-item" key={item._id}>
                      
                      <div className="menu-row">
                        <span className="item-name">{item.name}</span>
                        <span className="item-line"></span>
                        <span className="item-price">
                          30ml – ₹{item.price.ml30} | 60ml – ₹{item.price.ml60}
                        </span>
                      </div>

                      <span className="item-description">
                        {item.description}
                      </span>

                    </div>
                  ))}
              </div>

            </div>

            <h3 className="menu-category">Crafted Beers</h3>
            <div className="menu-block reverse">

              <div className="menu-image">
                <img src="/images/beer_placeholder.jpg" alt="Beers section" />
              </div>


              <div className="menu-content">
                {menuData
                  .filter(item => item.category === "beers")
                  .map(item => (
                    <div className="menu-item" key={item._id}>
                      
                      <div className="menu-row">
                        <span className="item-name">{item.name}</span>
                        <span className="item-line"></span>
                        <span className="item-price">
                          Pint – ₹{item.price.ml30} | Bottle – ₹{item.price.ml60}
                        </span>
                      </div>

                      <span className="item-description">
                        {item.description}
                      </span>

                    </div>
                  ))}
              </div>

            </div>
        </div>



        <div class="online-reservation">
          <div class="reservation-box">


            <div class="text-content">
              <h1 class="reservation-heading">Online Reservation</h1>
              <p class="reservation-subtext">
                Booking request +91 123-456-7890 or fill out the order form
              </p>

              <form class="reservation-form">

                <div class="form-row">
                  <span>
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" required />
                  </span>

                  <span>
                    <label for="phone">Phone Number</label>
                    <input type="text" id="phone" placeholder="Phone Number" required />
                  </span>
                </div>

                <div class="form-row">
                  <span>
                    <label for="date">Date</label>
                    <input type="date" id="date" />
                  </span>

                  <span>
                    <label for="time">Time</label>
                    <input type="time" id="time" />
                  </span>
                </div>

                <textarea placeholder="Message"></textarea>
                <button class="reserve-btn">Book Now</button>

              </form>
            </div>


            <div class="image-content">
              <div class="discount-text">
                <h4>HOT DEALS</h4>
                <h3>Weekend Specials</h3>
              </div>

              <div class="bullet-points">
                <ul>
                  <li>Not valid for online order</li>
                  <li>Non-refundable</li>
                  {/* <li>Eligible for 18+</li> */}
                  <li>Offer ends on 25th March</li>
                </ul>
              </div>

              <button class="reserve-btn">Book Now</button>
            </div>

          </div>
      </div>

    </section>
  );
}

export default Menu;
import React from "react";
import { NavLink } from "react-router-dom";
import LemonDessert from "../assets/LemonDessert.jpg";
import GreekSalad from "../assets/GreekSalad.jpg";
import Bruchetta from "../assets/Bruchetta.svg";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <section>

        <div className="menu-banner">
          <h3>Specials Menu</h3>
          <button>Order Online</button>
        </div>

        <div className="menu-items">
          <ul>
            <li>
              <img className="item-img" src={LemonDessert}
                alt="Lemon cake dessert"
                style={{ borderRadius: "8px", width: "65%" }}
              />
              <h4>Lemon Dessert</h4>
              <p>$6.99 + tax</p>
              <p>Iaculis nunc sed augue lacus. Proin libero nunc consequat interdum varius sit amet. </p>
            </li>

            <li>
              <img className="item-img" src={GreekSalad}
                alt="Greek salad on plate"
                style={{ borderRadius: "8px", width: "65%" }}
              />
              <h4>Greek Salad</h4>
              <p>$18.79 + tax</p>
              <p>Sapien eget mi proin sed libero enim. Et netus et malesuada fames ac turpis. Consequat mauris nunc congue nisi vitae suscipit. Pretium quam vulputate dignissim suspendisse in est ante in nibh.</p>
            </li>

            <li>
              <img className="item-img" src={Bruchetta}
                alt="bruschetta on wodden platter"
                style={{ borderRadius: "8px", width: "65%" }}
              />
              <h4>Bruschetta</h4>
              <p>$12.99 + tax</p>
              <p> Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi porta lorem mollis aliquam ut. Elementum nibh tellus molestie nunc non blandit massa enim nec. Eu facilisis sed odio morbi quis commodo odio aenean sed.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Menu;
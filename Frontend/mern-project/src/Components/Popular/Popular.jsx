import "./Popular.css";
import data_product from "../Assets/data";
import { useEffect } from "react";
import Item from "../Item/Item.jsx";
export default function Popular() {
  return (
    <div className="popular">
      <h1>POPPULAR IN WOMENS</h1>
      <hr />
      <div className="popular-items">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

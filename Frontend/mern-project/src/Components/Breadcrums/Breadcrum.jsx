import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  // console.log("props", props);
  const { product } = props;
  // console.log("props product ", product);
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};
export default Breadcrum;

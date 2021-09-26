import icons from "../../../assets/icons/symbol-defs.svg";

const Stars = ({ rating }) => {
  return Array(5)
    .fill("")
    .map((_, index) => {
      return (
        <div
          className={`product__star ${index < rating ? "star--on" : ""}`}
          key={index}
        >
          <svg className="icon icon-star_rate">
            <use xlinkHref={`${icons}#icon-star_rate`}></use>
          </svg>
        </div>
      );
    });
};

export default Stars;

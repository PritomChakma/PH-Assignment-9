import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../Router/AuthProvider";
const Product = () => {
  const { watches } = useContext(AuthContex);
  return (
    <div className="watch-list">
      <div className="watch-items grid md:grid-cols-3 mx-auto gap-5 w-11/12 ">
        {watches.slice(0, 6).map((watch) => (
          <div
            className="card bg-base-100 shadow-xl animate__animated  animate__backInUp"
            key={watch._id}
          >
            <figure className="px-10 pt-10">
              <img src={watch.image} alt="watch" className="rounded-xl h-40" />
            </figure>
            <div className="card-body items-center text-center">
              {/* <img className="w-20 h-12" src={watch.brand_logo} alt="" /> */}
              <p className="font-semibold">{watch.brand_name}</p>
              <p>{watch.description}</p>
              <p>
                Rating: <span className="font-semibold">{watch.rating}</span>
              </p>
              <div className="text-orange-400">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <div className="card-actions">
                <Link
                  to={`/coupon/${watch._id}`}
                  className="btn bg-[#F96E2A] text-white"
                >
                  View Coupons
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Product;

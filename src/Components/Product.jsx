import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";

const Product = () => {
  const { watches } = useContext(AuthContex);
  return (
    <div className="watch-list">
     
      <div className="watch-items grid md:grid-cols-3 mx-auto gap-5 w-11/12 ">
        {watches.map((watch) => (
          <div className="card bg-base-100 shadow-xl border-2">
            <figure className="px-10 pt-10">
              <img src={watch.image} alt="watch" className="rounded-xl h-40 " />
            </figure>
            <div className="card-body items-center text-center">
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

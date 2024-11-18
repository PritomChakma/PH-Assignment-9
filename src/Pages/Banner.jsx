import { Link } from "react-router-dom";
import alibaba from "../assets/alibaba.png";
import ali from "../assets/aliexpress.png";
import booking from "../assets/bbooking.png";
import daraz from "../assets/daraz.jpg";
const Banner = () => {
  return (
    <div className="hero bg-[#FBF8EF]  mt-10 w-11/12 mx-auto">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-xl md:text-4xl font-bold py-5">
            Get The Best Promo Code in Bangladesh
          </h1>
          <label className="input input-bordered flex items-center gap-2 md:w-9/12 mx-auto py-5">
            <input type="text" className="grow" placeholder="Enter a Shop or Brand" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <p className="py-6 md:w-9/12 mx-auto">
            Save More, Shop Smarter! Explore thousands of verified coupon codes
            and unbeatable deals for your favorite stores. Your savings journey
            starts here! Grab the Best Deals Now! Don't miss out on exclusive
            coupon codes to shop more and spend less Unlock Instant Discounts!
            Browse, click, and save with our latest collection of promo codes
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-3 md:gap-8 mx-auto justify-center">
            <img className="w-32 md:w-52 h-16 md:h-28" src={daraz} alt="" />
            <img className="w-32 md:w-52 h-16 md:h-28" src={booking} alt="" />
            <img className="w-32 md:w-52 h-16 md:h-28" src={ali} alt="" />
            <img className="w-32 md:w-52 h-16 md:h-28" src={alibaba} alt="" />
          </div>

          <div className="text-center mt-5">
        <Link className="btn bg-[#F96E2A] text-white" to="/brands">
          View All Brands Coupon
        </Link>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

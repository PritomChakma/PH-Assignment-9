import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CuponPage = () => {
  const [item, setItem] = useState({});
  const [coupons, setCoupons] = useState([]);
  const data = useLoaderData() || [];
  const { id } = useParams();

  useEffect(() => {
    if (id && data) {
      const findData = data.find((i) => i._id === id);
      setItem(findData);
      setCoupons(findData?.coupons || []);
    } else {
      setItem({});
      setCoupons([]);
    }
  }, [data, id]);__

  const handleCopy = () => {
    toast.success("Coupon code copied successfully!");
  };

  return (
    <div className="w-11/12 mx-auto mt-10">
      {/* Brand details card */}
      <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
        <figure>
          <img className="h-60 w-60 p-5" src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="font-bold">
            <span className="mr-2">Brand:</span>
            {item.brand_name}
          </h2>
          <h2 className="card-title text-2xl">{item.name}</h2>
          <div className="flex items-center gap-5">
            <div>
              <p className="text-lg">
                Rating: {item.rating || "No rating available"}
              </p>
            </div>

            <div className="text-orange-400">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Coupons grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon, index) => (
          <div key={index} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="text-xl font-semibold">
                Discount: {coupon.discount}
              </h3>
              <p className="text-sm text-gray-500">Code: {coupon.code}</p>
              <div className="flex justify-between items-center mt-4">
                <CopyToClipboard
                  text={coupon.code}
                  onCopy={() => handleCopy(coupon.code)}
                >
                  <button className="btn btn-secondary">Copy Code</button>
                </CopyToClipboard>
                <a
                  href={item.shop_Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Use Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuponPage;

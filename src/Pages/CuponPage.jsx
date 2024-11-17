import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";

const CuponPage = () => {
  const { watches } = useContext(AuthContex);
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {watches.map((watch) => (
          <li key={watch._id}>
            <h2>{watch.name}</h2>
            <p>{watch.description}</p>
            <p>Price: {watch.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CuponPage;

import { useEffect, useState } from "react";
import Card from "../components/Card";
import { BiLoaderAlt } from "react-icons/bi";

const MakeUp = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json",
      );
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-screen w-full flex flex-col items-center justify-center text-pink-500">
          <BiLoaderAlt className="text-5xl animate-spin mb-4" />
          <p className="font-medium text-gray-500">
            Loading your beauty finds...
          </p>
        </div>
      ) : isError ? (
        <p className="p-20 text-center text-gray-500 m-60">
          Error: {errorMessage}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:w-3/4 mx-auto mt-10">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default MakeUp;

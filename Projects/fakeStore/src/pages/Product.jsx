import React, { useEffect, useState } from "react";
import Rating from "../components/Rating";
import { FaCartShopping } from "react-icons/fa6";

// import loading from "../assets/loading.gif";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("https://fakestoreapi.com/products");
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
        <div className="w-full h-[90vh] flex justify-center items-center">
          {/* <img src={loading} alt="" className="w-50" /> */}
          loading
        </div>
      ) : (
        <div className="flex flex-col items-start justify-center w-full">
          {products.length > 0 &&
            products.map((product, index) => (
              // <div className="w-75 border rounded h-100 p-3" key={index}>
              //   <div className="w-full h-40">
              //     <img
              //       src={product.image}
              //       alt=""
              //       className="w-full h-full object-contain"
              //     />
              //   </div>
              //   <div className="flex flex-col justify-between h-50">
              //     <div>
              //       <p className="text-xl">{product.title}</p>
              //       <p className="text-sm capitalize text-gray-500">
              //         {product.category}
              //       </p>
              //       <p>₹ {product.price * 100}</p>
              //       <p>{product.rating.rate}/5</p>
              //     </div>

              //     <button className="bg-orange-400 rounded-full px-4 py-2">
              //       Add to cart
              //     </button>
              //   </div>
              // </div>

              <div className="flex flex-col md:flex-row p-3 m-10 gap-8 items-center max-w-5xl mx-auto">
                {/* Left Column: Image Container */}
                <div className="w-full md:w-1/2 h-96 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Right Column: Product Details */}
                <div className="flex flex-col items-start justify-center gap-3 w-full md:w-1/2">
                  <span className="px-2 py-0.5 text-sm rounded-full bg-emerald-500 text-white font-medium">
                    {product.category}
                  </span>

                  <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    {product.title}
                  </h1>

                  <p className="text-gray-600 leading-relaxed text-base">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-1.5">
                    <Rating />
                    <span className="text-sm text-gray-500 font-light">
                      ({product.rating.rate} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between w-full mt-4">
                    <span className="text-3xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium p-3 px-6 rounded-full w-auto min-w-[150px] transition-all hover:shadow-md flex items-center justify-center gap-2">
                      <FaCartShopping />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Products;

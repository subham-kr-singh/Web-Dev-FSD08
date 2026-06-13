import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  BiHeart,
  BiShareAlt,
  BiShoppingBag,
  BiCheck,
  BiLoaderAlt,
} from "react-icons/bi";
import { AiFillStar, AiOutlineInfoCircle } from "react-icons/ai";

const Preview = () => {
  const { id } = useParams();
  const location = useLocation();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    // 1. Try to get data from Link state first (Instant Load)
    if (location.state?.productData) {
      const data = location.state.productData;
      setProduct(data);
      setSelectedColor(data.product_colors?.[0] || null);
      setLoading(false);
    } else {
      // 2. Fetch from API if user refreshed the page
      fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setSelectedColor(data.product_colors?.[0] || null);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, [id, location.state]);

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center text-pink-500">
        <BiLoaderAlt className="text-5xl animate-spin mb-4" />
        <p className="font-medium text-gray-500">
          Loading your beauty finds...
        </p>
      </div>
    );
  }

  if (!product)
    return (
      <div className="p-20 text-center text-gray-500">Product not found.</div>
    );

  // Clean the image URL (API often returns // instead of https://)
  const mainImage = product.api_featured_image?.startsWith("//")
    ? `https:${product.api_featured_image}`
    : product.image_link;

  return (
    <div className="min-h-screen bg-[#F3F3F3] py-6 md:py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 p-4 md:p-10">
          {/* SECTION: VISUALS */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-[#F9F9F9] rounded-xl flex items-center justify-center p-8 border border-gray-50 overflow-hidden group">
              <img
                src={mainImage}
                alt={product.name}
                className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
              />
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 p-3 rounded-full bg-white shadow-md text-gray-300 hover:text-pink-500 transition-all">
                <BiHeart
                  className={`text-2xl ${isWishlisted ? "fill-pink-500 text-pink-500" : ""}`}
                />
              </button>
            </div>

            {/* PRODUCT TAGS */}
            <div className="flex flex-wrap gap-2">
              {product.tag_list?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider rounded border border-emerald-100">
                  🌱 {tag}
                </span>
              ))}
            </div>
          </div>

          {/* SECTION: CONTENT */}
          <div className="mt-8 md:mt-0 flex flex-col">
            <div className="flex-grow">
              <p className="text-pink-600 font-bold text-xs uppercase tracking-widest mb-1">
                {product.brand}
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 leading-tight">
                {product.name}
              </h1>

              {/* RATING BLOCK */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center bg-emerald-600 text-white px-2 py-1 rounded text-xs font-bold gap-1">
                  {product.rating || "4.2"} <AiFillStar />
                </div>
                <span className="text-gray-300">|</span>
                <p className="text-gray-500 text-sm font-medium">
                  2,450 Ratings & 450 Reviews
                </p>
              </div>

              {/* PRICE BLOCK */}
              <div className="bg-gray-50 p-4 rounded-xl flex items-baseline gap-3 mb-8">
                <span className="text-3xl font-bold text-gray-900">
                  {product.price_sign || "$"}
                  {product.price}
                </span>
                <span className="text-gray-400 line-through text-lg">
                  {product.price_sign || "$"}
                  {(parseFloat(product.price) * 1.5).toFixed(2)}
                </span>
                <span className="text-pink-600 font-bold text-sm bg-pink-100 px-2 py-0.5 rounded">
                  50% OFF
                </span>
              </div>

              {/* COLOR SWATCHES (Drawn from product_colors array) */}
              {product.product_colors?.length > 0 && (
                <div className="mb-8">
                  <div className="flex justify-between items-end mb-3">
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">
                      Select Shade
                    </h3>
                    <span className="text-xs text-pink-600 font-bold px-2 py-1 bg-pink-50 rounded border border-pink-100 italic">
                      {selectedColor?.colour_name}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 p-3 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                    {product.product_colors.map((color, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedColor(color)}
                        style={{ backgroundColor: color.hex_value }}
                        className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center shadow-sm hover:scale-110 ${
                          selectedColor?.colour_name === color.colour_name
                            ? "border-pink-500 ring-2 ring-pink-200"
                            : "border-white"
                        }`}>
                        {selectedColor?.colour_name === color.colour_name && (
                          <BiCheck className="text-white drop-shadow-md text-xl" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* DESCRIPTION */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3 text-gray-900">
                  <AiOutlineInfoCircle className="text-lg" />
                  <h3 className="text-xs font-black uppercase tracking-widest">
                    Product Details
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic border-l-4 border-pink-100 pl-4">
                  {product.description}
                </p>
              </div>
            </div>

            {/* ACTION FOOTER */}
            <div className="flex gap-4 sticky bottom-0 bg-white py-4 md:relative">
              <button className="flex-[3] bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-200 transition-all flex items-center justify-center gap-3 uppercase text-sm tracking-widest">
                <BiShoppingBag className="text-xl" /> Add to Bag
              </button>
              <button className="flex-1 bg-white border-2 border-gray-100 text-gray-400 hover:text-gray-600 hover:border-gray-200 transition-all rounded-xl flex items-center justify-center">
                <BiShareAlt className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;

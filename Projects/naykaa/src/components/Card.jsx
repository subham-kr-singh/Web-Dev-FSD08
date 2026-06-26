import { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const [likes, setLikes] = useState(0);

  const productImage = product.api_featured_image
    ? `https:${product.api_featured_image}`
    : product.image_link;

  return (
    <div className="group relative border border-gray-200 rounded-lg flex flex-col items-center w-80 mx-auto overflow-hidden my-5 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Product Image Container */}
      <div className="w-full h-64 flex items-center justify-center p-4 bg-gray-50">
        <img
          src={productImage}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Information */}
      <div className="w-full text-center text-gray-700 font-medium p-4 flex flex-col gap-2 grow">
        <p className="text-start font-semibold text-gray-900 truncate">
          {product.brand?.toUpperCase()}
        </p>
        <p className="text-start text-sm text-gray-500 line-clamp-2 h-10">
          {product.name}
        </p>
        <div className="flex gap-2 items-center justify-start mt-2">
          <span className="text-lg font-bold text-gray-900">
            {product.price_sign || "$"}
            {product.price}
          </span>
          <span className="text-xs text-gray-400 font-normal">
            {product.currency}
          </span>
        </div>
      </div>

      {/* Action Overlay (Triggers on Outer Card Hover) */}
      <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-0 left-0 right-0 flex items-center bg-white border-t border-gray-100 transition-all duration-300 ease-in-out h-14 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {/* Like Button */}
        <button
          onClick={() => setLikes(likes + 1)}
          className="flex items-center justify-center gap-1.5 text-gray-500 hover:text-pink-500 hover:bg-pink-50 transition-colors duration-200 w-1/4 h-full border-r border-gray-100"
          title="Like Product">
          <BiHeart
            className={`text-xl ${likes > 0 ? "fill-pink-500 text-pink-500" : ""}`}
          />
          <span className="text-sm font-semibold">{likes}</span>
        </button>

        {/* Preview Link/Button */}
        <div className="w-3/4 h-full">
          <Link to={`/makeup/preview/${product.id}`} className="w-full h-full">
            <button className="bg-pink-500 text-white font-medium text-sm hover:bg-pink-600 transition-colors duration-200 w-full h-full flex items-center justify-center">
              Preview Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

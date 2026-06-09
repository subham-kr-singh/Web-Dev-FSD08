import React from "react";

function RestaurantCard({ restaurant }) {
  const { name, description, image, rating, tags } = restaurant || {};

  return (
    /* Changed from w-75 to an explicit width of 60% to get your perfect size */
    <div
      className="card h-100 rounded-4 bg-white border-0 shadow-sm overflow-hidden hover-card mx-auto"
      style={{ width: "100%" }}>
      {/* Aspect Frame for Image */}
      <div
        className="position-relative"
        style={{ height: "180px", overflow: "hidden" }}>
        <img
          src={image}
          alt={name}
          className="object-fit-cover w-100 h-100"
          loading="lazy"
        />
        {/* Floating Rating Badge */}
        <div
          className="position-absolute top-0 end-0 m-2 badge-rating d-flex align-items-center gap-1 px-2 py-0.5 rounded-pill text-white fw-bold"
          style={{ fontSize: "0.85rem" }}>
          <span>★</span>
          <span style={{ letterSpacing: "0.5px" }}>{rating || "0.0"}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="card-body p-3 d-flex flex-column justify-content-between">
        <div>
          {/* Restaurant Title */}
          <h3 className="fs-5 fw-extrabold text-black mb-1.5 text-start">
            {name}
          </h3>

          {/* Description Block */}
          <p
            className="text-start text-dark opacity-75 mb-2.5 lh-sm"
            style={{ fontWeight: "400", fontSize: "0.85rem" }}>
            {description}
          </p>

          {/* Micro Tags Mapping Loop */}
          <div className="d-flex flex-wrap gap-1.5 mb-3">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="custom-tag px-2 py-0.5 rounded-2 text-dark font-medium"
                  style={{ fontSize: "0.75rem" }}>
                  {tag}
                </span>
              ))}
          </div>
        </div>

        {/* Separator Line & Action Button */}
        <div className="mt-auto">
          <hr className="text-black-50 opacity-25 mb-2.5 mt-0" />
          <button
            className="btn btn-orange text-white w-100 py-2 rounded-3 fw-bold"
            style={{ fontSize: "0.95rem" }}>
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;

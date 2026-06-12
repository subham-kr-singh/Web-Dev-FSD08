import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-stone-100 gap-5 p-10">
        <span className="font-bold text-5xl">About fakeStore</span>

        <div className="flex justify-center w-200 p-10">
          <div className="w-1/2 flex flex-col gap-3 items-start justify-center">
            <span className="font-bold text-3xl">Our Mission.</span>
            <p className="font-medium text-2xl">
              fakeStore is an educational demonstration platform built to
              showcase modern e-commerce
            </p>
            <p className="text-xl">
              UI/UX. I'm a project it is powered by data from the Fake Store
              API.
            </p>
          </div>
          <div className="w-1/2 border rounded-2xl"></div>
        </div>

        <div className="flex *:rounded-2xl gap-5 *:h-fit *:w-120 *:border *:bg-white *:[&_span]:text-3xl *:[&_span]:font-bold *:[&_p]:text-xl *:[&_p]:font-medium *:[&_div]:flex *:[&_div]:flex-col *:[&_div]:items-start *:[&_div]:justify-center *:[&_div]:gap-3 *:[&_div]:p-5">
          <div className="">
            <img
              src=""
              alt=""
              className="w-full h-45 object-cover rounded-xl"
            />
            <div>
              <span>Built for Learning</span>
              <p>
                fakeStore is an educational demonstration platform built to
                showcase more showcase modern e-commerce UI/UX. and it is
                powered by data from the Fake Store API.
              </p>
            </div>
          </div>
          <div className="">
            <img
              src=""
              alt=""
              className="w-full h-45 object-cover rounded-xl"
            />
            <div>
              <span>Powered by Community Data</span>
              <p>
                fakeStore is an educational demonstration community data and to
                showcase community data. and ecommerce it is project for
                developers ecommerce projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

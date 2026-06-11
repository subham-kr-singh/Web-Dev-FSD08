import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-stone-100 gap-5 pb-15">
        <span className="text-4xl font-bold mt-5">Contact Us</span>
        <div className="flex justify-between items-center gap-15">
          <div className=" bg-white shadow-xl rounded-xl flex flex-col items-start justify-center px-10 py-5 gap-10 h-fit">
            <h1 className="text-3xl font-bold">Get in Touch</h1>
            <form className="flex flex-col items-start justify-center gap-3 *:text-xl [&_input]:bg-white [&_input]:w-90 [&_input]:rounded-xl [&_input]:py-2 [&_input]:border [&_input]:px-4">
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" />

              <label htmlFor="name">Your email</label>
              <input type="email" name="email" />

              <label htmlFor="subject">subject</label>
              <input type="text" name="subject" />

              <label htmlFor="messsage">Your messsage</label>
              <textarea
                name="messsage"
                className="bg-white h-50 w-90 resize-none border rounded-xl p-4"></textarea>

              <button className="py-2 w-full bg-amber-500 rounded-2xl text-white font-medium">
                Send messsage
              </button>
            </form>
          </div>

          <div className="h-80 w-100 bg-white flex flex-col justify-between items-start p-10 rounded-2xl shadow-xl">
            <div className="flex flex-col justify-center items-start gap-3">
              <span className="font-medium text-2xl">Email</span>
              <a
                href="mailto:support@fakestore.com"
                className="underline text-xl">
                support@fakestore.com
              </a>
            </div>

            <hr class="w-full h-0.5 bg-gray-300 border-0 rounded" />

            <div className="flex flex-col">
              <span className="text-2xl font-semibold">Social Media</span>
              <div className="flex justify-center items-center gap-3 text-xl">
                <FaFacebook />
                <a href="">@fakeStore</a>
              </div>
              <div className="flex justify-center items-center gap-3 text-xl">
                <FaInstagram />
                <a href="">@fakeStore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-sky-950 text-slate-200">
        {/* Top Section: Branding & Intro */}
        <div className="flex flex-col items-center justify-center border-b border-sky-900 gap-4 p-10 text-center">
          <span className="text-4xl font-bold text-white">FakeStore</span>
          <p className="text-xl text-slate-300 max-w-2xl">
            A modern e-commerce frontend demonstration powered by the Fake Store
            API. Built for learning UI/UX and dynamic data integration.
          </p>
        </div>

        {/* Bottom Section: Links Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 p-10 justify-items-center sm:justify-items-start">
          {/* Categories Column */}
          <div className="flex flex-col gap-3">
            <span className="font-bold text-2xl text-white">Categories</span>
            <a
              href="/products/men"
              className="text-lg text-slate-400 hover:text-white hover:underline transition-colors">
              Men's Clothing
            </a>
            <a
              href="/products/women"
              className="text-lg text-slate-400 hover:text-white hover:underline transition-colors">
              Women's Clothing
            </a>
            <a
              href="/products/jewelery"
              className="text-lg text-slate-400 hover:text-white hover:underline transition-colors">
              Jewelry
            </a>
            <a
              href="/products/electronics"
              className="text-lg text-slate-400 hover:text-white hover:underline transition-colors">
              Electronics
            </a>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-3">
            <span className="font-bold text-2xl text-white">Resources</span>
            <a
              href="https://fakestoreapi.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-slate-400 hover:text-white hover:underline transition-colors">
              API Documentation
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-slate-400 hover:text-white hover:underline transition-colors">
              GitHub Repository
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
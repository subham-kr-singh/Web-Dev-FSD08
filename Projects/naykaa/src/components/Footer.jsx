import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300 mt-5">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/makeup" className="hover:text-pink-400">Makeup</Link></li>
            <li><Link to="/skin" className="hover:text-pink-400">Skin</Link></li>
            <li><Link to="/hair" className="hover:text-pink-400">Hair</Link></li>
            <li><Link to="/fragrance" className="hover:text-pink-400">Fragrance</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-pink-400">FAQs</a></li>
            <li><a href="#" className="hover:text-pink-400">Track Order</a></li>
            <li><a href="#" className="hover:text-pink-400">Return Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400">About Us</a></li>
            <li><Link to="/brands" className="hover:text-pink-400">Brands</Link></li>
            <li><Link to="/luxe" className="hover:text-pink-400">Luxe</Link></li>
            <li><Link to="/beauty-advice" className="hover:text-pink-400">Beauty Advice</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Download App</h3>
          <p className="text-sm">Get exclusive deals on the Nykaa app.</p>
          <p className="text-pink-400 font-bold mt-4 text-lg">#Nykaa</p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2026 Nykaa. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

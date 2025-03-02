import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Explore</a></li>
            <li><a href="#" className="hover:text-white">Write to Us</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#" className="hover:text-white">Popular Destination</a></li>
            <li><a href="#" className="hover:text-white">Vacation Packages</a></li>
            <li><a href="#" className="hover:text-white">List of Tours</a></li>
            <li><a href="#" className="hover:text-white">Gallery</a></li>
            <li><a href="#" className="hover:text-white">Travel on a Budget</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="text-black bg-white p-2 rounded-full hover:bg-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" className="text-black bg-white p-2 rounded-full hover:bg-gray-200">
              <FaInstagram />
            </a>
            <a href="#" className="text-black bg-white p-2 rounded-full hover:bg-gray-200">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

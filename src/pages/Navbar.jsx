import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center">
        <div className="h-4 w-4 bg-black rounded-full mr-2"></div>
        <span className="font-bold text-lg">BRAND LOGO</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="font-medium">HOME</Link>
        <Link to="/about" className="font-medium">ABOUT US</Link>
        <Link to="/services" className="font-medium">SERVICES</Link>
        <Link to="/login" className="bg-purple-700 text-white px-6 py-2 rounded-md font-medium">LOGIN</Link>
        {/* <button className="bg-gray-100 p-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button> */}
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex items-center" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white z-50 shadow-lg md:hidden">
          <div className="flex flex-col p-4 gap-4">
            <Link to="/" className="font-medium py-2">HOME</Link>
            <Link to="/about" className="font-medium py-2">ABOUT US</Link>
            <Link to="/services" className="font-medium py-2">SERVICES</Link>
            <Link to="/login" className="bg-purple-700 text-white px-6 py-2 rounded-md font-medium text-center">LOGIN</Link>
            <button className="bg-gray-100 p-2 rounded-md self-start">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg> */}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-body-tertiary p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-white hover:text-gray-300">
            maperia
          </Link>
        <div className="space-x-4">
        <Link to="/locations" className="text-white-300">Home</Link>
        <Link to="/locations/about" className="text-white-300">About</Link>
          <div className="relative inline-block text-white">
          <Link to="/locations/contactus" className="hover:text-gray-300">Contact</Link>
            
          
        
       
      </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;

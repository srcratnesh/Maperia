import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Loc = () => {
  return (
    
    <motion.div
      className=" text-white p-4 flex flex-col items-start justify-between h-screen "
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
         >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to Maperia</h1>
        <p className="text-lg font-bold mb-2">Discover and share amazing locations !</p>
      </div>

      <div className="flex items-center space-x-10 mb-12">
        <Link to="/locations/create">
        <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(255, 255, 255, 1)' }}
        whileTap={{ scale: 0.95 }}
        className="bg-black text-white py-3 px-6 rounded-lg border-4 border-white mb-12 font-bold glow-container"
        >
        CREATE LOCATION
        </motion.button>

        </Link>

        {/* White arrow element */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          className="w-8 h-8 self-start"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>

        <Link to="/locations/client">
        <motion.button
            whileHover={{ scale: 1.05 , boxShadow: '0 0 10px rgba(255, 255, 255, 1)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white py-3 px-6 rounded-lg border-4 border-white mb-12 font-bold glow-container"
          >
            LOCATION LIST
          </motion.button>
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 mb-4 mr-4">
        {/* Additional content, if any */}
      </div>

      
    </motion.div>
  );
  
};

export default Loc;

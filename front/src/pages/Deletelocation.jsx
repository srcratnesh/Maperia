import React, { useState } from 'react';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';
import Navbar from '../components/Navbar'; // Import your Navbar component

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Deletelocation = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteLocation = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/locations/${id}`)
      .then(() => {
        toast.success('Location deleted successfully!', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      })
      .catch((error) => {
        toast.error('Error deleting location!', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
        navigate('/locations/home');
      });
  };
  

  return (
    <div className='min-h-screen p-5 bg-black text-white'>
      <Backbutton />
      <h1 className='text-3xl my-4 font-bold'>Delete Location</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto'>
        <h3 className='text-2x1'>Are you sure you want to delete the location?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteLocation}
        >
          Yes, Delete
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Deletelocation;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';

const ShowLocation = () => {
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    axios.get(`http://localhost:5555/locations/${id}`)
      .then((response) => {
        setLocation(response.data);
        setLoading(false);

      })
      .catch((error)=> {
        console.log(error);
        setLoading(false);
        
      })
  }, []); // Include id in the dependency array to fetch data when it changes

  return (
    
    <div className='p-5 bg-black text-white'>

      <Backbutton />
      <h1 className='text-3xl my-4 font-bold'>SHOW LOCATION</h1>
      {loading ? (
        <Spinner /> 
      ) : (
        
        <div className='flex flex-col border-4 border-sky-300 rounded-md w fit p-4'>
        <div className='my-4'>
          <span className="text-x1 mr-7 text-yellow-500 font-bold">Location ID :</span>
          <span>{location.lc_id}</span>
        </div>
        <div className='my-4'>
          <span className="text-x1 mr-7 text-yellow-500 font-bold">Name :</span>
          <span>{location.name}</span>
        </div>
        <div className='my-4'>
          <span className="text-x1 mr-7 text-yellow-500 font-bold">Area :</span>
          <span>{location.address && location.address.area}</span>
        </div>
        <div className='my-4'>
          <span className="text-x1 mr-7 text-yellow-500 font-bold">City :</span>
          <span>{location.address && location.address.city}</span>
        </div>
        <div className='my-4'>
          <span className="text-x1 mr-16 text-yellow-500 font-bold">State :</span>
          <span>{location.address && location.address.state}</span>
        </div>
        <div className='my-4'>
          <span className="text-x1 mr-16 text-yellow-500 font-bold">  Annual revenue :</span>
          <span>{location.annual_revenue}</span>
        </div>
        <div className='my-4'>
          <span className="text-x1 mr-16 text-yellow-500 font-bold">Contact :</span>
          <span>{location.ph_no}</span>
        </div>
      </div>
      
       
      )}
    </div>
  );
  
};

export default ShowLocation;

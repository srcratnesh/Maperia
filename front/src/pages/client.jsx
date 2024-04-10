import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import Backbutton from '../components/Backbutton';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';

const Home = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/locations')
      .then((response) => {
        setLocations(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching locations:', error);
        setLoading(false);
      });
  }, []);

 

  return (
    <div className='p-5 bg-black text-white min-h-screen' style={{ backgroundColor: 'black' }}>
      <Backbutton />
      <div className='flex justify-between items-center mb-5 '>
        <h1 className='text-3xl font-bold ' style={{ marginTop: '20px' }}>
          LOCATION LIST
        </h1>
        <Link to='/locations/create'>
          <MdOutlineAddBox className='text-purple-800 rounded-md text-4xl glow-add' />
        </Link>
      </div>
      <div className='text-black mb-3 flex justify-end'></div>
      {loading ? (
        <Spinner />
      ) : (
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>Index</th>
              <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>Location ID</th>
              <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>Name</th>
              <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>Area</th>
              <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>City</th>
              <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>State</th>
              <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>Contacts</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location, index) => (
              <tr key={location._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center glow-bobo'>{index + 1}</td>
                <td className='border border-slate-700 rounded-md text-center glow-bobo'>{location.lc_id}</td>
                <td className='border border-slate-700 rounded-md text-center glow-bobo'>{location.name}</td>
                <td className='border border-slate-700 rounded-md text-center glow-bobo'>{location.address.area}</td>
                <td className='border border-slate-700 rounded-md text-center glow-bobo'>{location.address.city}</td>
                <td className='border border-slate-700 rounded-md text-center glow-bobo'>{location.address.state}</td>
                <td className='border border-slate-700 rounded-md text-center glow-bobo'>{location.ph_no}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;

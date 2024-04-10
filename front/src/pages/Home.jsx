import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import Backbutton from '../components/Backbutton';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';


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
  <div className='p-5 bg-black text-white'>
    <Backbutton />
    <div className='flex justify-between items-center'>
    <h1 className="text-3xl font-bold">LOCATION LIST</h1>
      <Link to='/locations/create'>
        <MdOutlineAddBox className='text-purple-800 rounded-md text-4xl glow-add' />
      </Link>
    </div>
    {loading ? (
      <Spinner />
    ) : (
      <table className='w-full border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>Index</th>
            <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>Location ID</th>
            <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>
              Name
              </th>
            <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>
              Area
              </th>
            <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>
              City
              </th>
            <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>
              State
              </th>
            <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>
              Annual Revenue
              </th>
            <th className='border border-slate-600 rounded-md max-md:hidden text-yellow-500 glow-pookie'>Phone Number</th>
            <th className='border border-slate-600 rounded-md text-yellow-500 glow-pookie'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr key={location._id} className='h-8'>
              <td className='border border-slate-700 rounded-md text-center glow-bobo'>{index + 1}</td>
              <td className='border border-slate-700 rounded-md text-center glow-bobo'>
                {location.lc_id}
              </td>
              <td className='border border-slate-700 rounded-md text-center glow-bobo'>
                {location.name}
              </td>
              <td className='border border-slate-700 rounded-md text-center glow-bobo'>
                {location.address.area}
              </td>
              <td className='border border-slate-700 rounded-md text-center glow-bobo'>
                {location.address.city}
              </td>
              <td className='border border-slate-700 rounded-md text-center glow-bobo'>
                {location.address.state}
              </td>
              <td className='border border-slate-700 rounded-md text-center glow-bobo'>
                {location.annual_revenue}
              </td>
              <td className='border border-slate-700 rounded-md text-center glow-bobo'>
                {location.ph_no}
              </td>
              <td className='border  rounded-md px-6 py-4 glow-bobo'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={`/locations/details/${location._id}`}>
                    <BsInfoCircle className='text-2xl text-green-500' />
                  </Link>
                  <Link to={`/locations/edit/${location._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-300' />
                  </Link>
                  <Link to={`/locations/delete/${location._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);


};

export default Home;

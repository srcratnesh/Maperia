// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateLocation from './pages/CreateLocation';
import ShowLocation from './pages/ShowLocation';
import EditLocation from './pages/EditLocation';
import DeleteLocation from './pages/Deletelocation';
import Locations from './pages/Loc';
import ContactUs from './components/ContactUs';
import Client from './pages/client';
import MapComponent from './pages/MapComponent';




function App() {
  return (
    <div style={{overflow: 'hidden' }}>
      <Navbar />
      <div className="container mx-full p-4">
        <Routes>
          <Route path='/locations/create' element={<CreateLocation />} />
          <Route path='/locations/details/:id' element={<ShowLocation />} />
          <Route path='/locations/edit/:id' element={<EditLocation />} />
          <Route path='/locations/delete/:id' element={<DeleteLocation />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/locations/contactus' element={<ContactUs />} />
          <Route path='/locations/client' element={<Client />} />
          <Route path='/locations/home'element={<Home />} />
          <Route path='/locations/map' element={<MapComponent/>} />

        </Routes>
  

      </div>
    </div>
  );
}

export default App;

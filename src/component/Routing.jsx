import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Adduser } from '../Pages/Adduser';
import { Edit } from '../Pages/Edit';
import Home from '../Pages/Home';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Adduser' element={<Adduser />} />
        <Route path='/Edit/:id' element={<Edit />} />
      </Routes>
    </div>
  );
};

export default Routing;

import React from 'react';
import '../App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '../index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Ponds from "./Ponds";
import Medicine from "./Medicine";
import NoPage from "./NoPage";

function Routeserp({ signOut, user }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ponds" element={<Ponds />} />
          <Route path="medicine" element={<Medicine />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default withAuthenticator(Routeserp);
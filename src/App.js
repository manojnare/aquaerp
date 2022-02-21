import React from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Ponds from "./pages/Ponds";
import Medicine from "./pages/Medicine";
import NoPage from "./pages/NoPage";


function App({ signOut, user }) {
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

export default withAuthenticator(App);
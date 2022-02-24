import React from 'react';
import '../App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '../index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Expenses from "./Expenses";
import Ponds from "./Ponds";
import Income from "./Income";
import FeedTime from "./FeedTime";
import NoPage from "./NoPage";

function Routeserp({ signOut, user }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FeedTime />} />
          <Route path="ponds" element={<Ponds />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="income" element={<Income />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default withAuthenticator(Routeserp);
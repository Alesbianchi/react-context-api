import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePosts from "./pages/CreatePosts";
import ListaPosts from "./pages/ListaPosts";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posts" >
              <Route index element={<ListaPosts />} />
              <Route path="crea" element={<CreatePosts />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

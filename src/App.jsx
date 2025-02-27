import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalContext from "./contexts/GlobalContext";

import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePosts from "./pages/CreatePosts";
import ListaPosts from "./pages/ListaPosts";

function App() {

  const [post, setPost] = useState([]);

  function fetchPosts() {
    axios.get("http://localhost:3000/posts")
      .then((res) =>
        setPost(res.data)

      )
  }

  useEffect(fetchPosts, []);

  return (
    <GlobalContext.Provider value={{ post }}>
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
    </GlobalContext.Provider >
  )
}

export default App

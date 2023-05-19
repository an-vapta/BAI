import React, { useEffect } from 'react';
import './App.css';
import ContentList from './component/ContentList';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Contentdata from './component/Contentdata';
import axios from 'axios'
import Product from './component/Project';
import Signup from './component/SignUp';

function App() {
  // axios.get("https://96cb-122-185-46-118.ngrok-free.app/api/v1/contents")
  //   useEffect(() => {
  //   axios.get(`https://96cb-122-185-46-118.ngrok-free.app/api/v1/contents`)
  //     .then(function (response: any) {
  //       console.log(response.data, "data")
  //      // setData(response)
  //       console.log(response);
  //     })
  // }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContentList />} />
          <Route path="/content" element={<Contentdata />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

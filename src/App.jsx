import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Article from './components/Article/Article';
// import Emergency from './components/Emergency/Emergency';
// import Footer from './components/Footer/Footer';
import FindADoctor from './components/FindDoctor/FindADoctor';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Routes>
        <Route path="/" element={<FindADoctor />} />
        <Route path="/Article" element={<Article />} />
      </Routes>
      {/* <Article /> */}
      {/* <Emergency />
      <Footer /> */}
      {/* <FindADoctor /> */}
    </header>
  </div>
);

export default App;

import React from 'react';
import './App.css';
import Top from './Components/Top';
import Header from './Components/Header';
import Bottom from './Components/Bottom';
import Banner from './Components/Banner';
import { Products } from './Components/Products';

function App() {
  return (
    <div className="App">
      <Top />
      <Header />
      <Bottom />
      <Banner />
      <Products />
    </div>
  );
}

export default App;

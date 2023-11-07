import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Code from './component/code';
import DataContext from './component/context/datacontext'; // Assuming DataContextProvider is your context provider component
import Home from './component/hero';
import Features from './component/feature'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route
          exact
          path="/editor"
          element={
            <DataContext>
              <Code />
            </DataContext>
          }
        />
        <Route exact path='/feature' element={<Features />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

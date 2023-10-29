import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Code from './component/code';
import DataContext from './component/context/datacontext'; // Assuming DataContextProvider is your context provider component
import Home from './component/hero';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path="/editor"
          element={
            <DataContext>
              <Code />
            </DataContext>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

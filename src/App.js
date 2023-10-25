import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Code from './component/code';
import DataContext from './component/context/datacontext'; // Assuming DataContextProvider is your context provider component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
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

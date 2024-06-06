import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageContent from './components/PageContent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/budget-buddy"
          element={<PageContent />}
        />
        <Route
          path="/"
          element={<PageContent />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

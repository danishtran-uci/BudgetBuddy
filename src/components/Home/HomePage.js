import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      test
    </div>
  );
}

export default HomePage;
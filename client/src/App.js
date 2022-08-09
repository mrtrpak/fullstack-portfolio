import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import HomePage from './pages/Home';
import SoccerPage from './pages/Soccer';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/soccer" element={<SoccerPage />} />
        </Routes>
      </Router>
    </div>
  );
};

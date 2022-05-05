import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import SinglePage from './pages/singlePage/SinglePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <SinglePage />
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSection from './components/left-section/LeftSection';
import RightSection from './components/right-section/RightSection';

function App() {
  return (
    <div className="App">
      <div className=" mainSection">
        <LeftSection />
        <RightSection />
      </div>
    </div >
  );
}

export default App;

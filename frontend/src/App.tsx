import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import './App.css';
import { useEffect, useState } from 'react';
import Timeline from './components/Timeline';
import Education from './components/Education';
import Summary from './components/Summary';

function App() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('https://my-website-backend-hs31.vercel.app')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error('Error:', error));
  // }, []);

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/experiences" element={<Timeline/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/skills" element={<Summary/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;

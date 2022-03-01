import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><Hero /></>} />
      </Routes>
    </Router>
  );
}

export default App;

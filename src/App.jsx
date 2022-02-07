import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import ErronPage from './pages/ErronPage';
import Header from './pages/Header';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:proId" element={<Details />} />
        <Route path="*" element={<ErronPage />} />
      </Routes>
    </Router>
  );
}

export default App;

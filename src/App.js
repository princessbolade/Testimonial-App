import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from './Components/Nav-Bar/NavBar';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <>
    <Router>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</Router>
    </>
  );
}

export default App;

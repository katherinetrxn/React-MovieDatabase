import Movies from './pages/Movies';
import Home from './pages/Home'
import MovieInfo from './pages/MovieInfo'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/movies' element={<Movies />}></Route>
      <Route path='/movies/:searchInput' element={<MovieInfo />}></Route>
    
    </Routes>
    </div>
    </Router>
  );
}

export default App;


import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
     <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<h1>hi</h1>} />
         
        </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
// import Navbar from './Components/Navbar/Navbar'
import bgsocial from './Assets/bgsocial.jpg'
import AllRoutes from './AllRoutes'
function App() {
  return (
    <Router>
    <div className="App">
      {/* <Navbar/> */}
      <AllRoutes/>
      <img src={bgsocial} alt='bgsocial' className='bgsocial'/>
    </div>
    </Router>
  );
}

export default App;

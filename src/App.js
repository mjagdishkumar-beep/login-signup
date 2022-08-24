import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { Routes, Route, } from "react-router-dom";
import Password from './components/Password';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/Password' element={<Password />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;

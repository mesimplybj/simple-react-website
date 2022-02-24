import Home from './Layout/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './Layout/Dashboard';
import Login from './Layout/Login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;

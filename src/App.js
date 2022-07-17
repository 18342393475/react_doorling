import {Link, NavLink, Outlet} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" style={{width: '60px', height: '60px' }}/>
      <h1>Bookkeeper!</h1>
      <div>
        <Link to="/home"> home page</Link>
        <NavLink to="/doc" end style={({isActive}) => { return {color: isActive? 'red': ''}}}> doc page</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default App;

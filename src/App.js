import logo from './logo.svg';
import './App.css';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate()

  return (
    <div className="App">
      <h1> Home </h1>


    <button onClick={
      ()=>{
        navigate("/home/expense",{state:577})
      }
    }>Expense</button>

      <Link to="/home/expense">Expense</Link>{" || "}

      <NavLink style={({ isActive }) => {
        return (
          {
            color: isActive ? "red" : ""
          }
        );
      }} to="/home/invoice" state={1234}>Invoice</NavLink>


      <Outlet />
    </div>
  );
}

export default App;

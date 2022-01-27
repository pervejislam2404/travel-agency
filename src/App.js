import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home/home/Home';
import Login from './pages/login/Login';
import Header from './pages/shared/header/Header';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import AddAdmin from './pages/dashboard/addAdmin/AddAdmin';
import AddBlog from './pages/dashboard/addBlog/AddBlog';
import AllBlogs from './pages/dashboard/allBlogs/AllBlogs';

function App() {
  return (
    <div className="App">
      <Router>
     <Header/>

        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}>
               <Route path="admin" element={<AddAdmin/>}/>
               <Route path="addBlog" element={<AddBlog/>}/>
               <Route path="allBlogs" element={<AllBlogs/>}/>
          </Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;

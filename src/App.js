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
import BlogDetail from './pages/home/blogs/blogDetail/BlogDetail';
import PrivateRoute from './pages/shared/privateRoute/PrivateRoute';
import ManageUserBlog from './pages/dashboard/manageUserBlog/ManageUserBlog';
import UserBlog from './pages/dashboard/userBlog/UserBlog';
import Footer from './pages/shared/footer/Footer';

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
               <Route path="" element={<UserBlog/>}/>
               <Route path="admin" element={<AddAdmin/>}/>
               <Route path="addBlog" element={<AddBlog/>}/>
               <Route path="allBlogs" element={<AllBlogs/>}/>
               <Route path="userBlog" element={<ManageUserBlog/>}/>
          </Route>


          <Route path="/details/:id" element={<PrivateRoute>
            <BlogDetail/>                 
          </PrivateRoute>}/>
        </Routes>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;

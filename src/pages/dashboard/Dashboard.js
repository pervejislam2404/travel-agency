import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import './Dashboard.css'

const Dashboard = () => {
    const location = useLocation();
    document.title=`travel agency -${location.pathname}`;

    const admin = true;
    // useSelector(state=> state.statesCounter.admin);
    console.log(admin);
    const {googleSingOut} = useFirebase();
    const navigate = useNavigate();

    const handleSingOut = () =>{
        googleSingOut();
        navigate("/home")
      } 

    return (
        <div className="">
            <div className="container my-5">
                 <div className="row border">
                     <div className="col-12 col-md-3 col-lg-3">
                        <ul className="list-group border-0">
                            
                            {/* all-dashboard's-route */}
                            <li className="list-group-item border-0 px-0 fs-5" aria-current="true">    
                                <NavLink className={({ isActive }) => (isActive ? 'text-decoration-none text-light px-3 py-1 bg-primary d-block' : 'text-decoration-none text-dark px-3 py-1  d-block')} to=""> <i className="fas fa-user px-2"></i>My Blogs</NavLink>
                            </li>
                
                            {admin && <li className="list-group-item border-0 px-0 fs-5">      
                                <NavLink className={({ isActive }) => (isActive ? 'text-decoration-none text-light px-3 py-1 bg-dark d-block' : 'text-decoration-none text-dark px-3 py-1  d-block')} to="/dashboard/admin"> <i className="fas fa-user-lock px-2"></i>  Make Admin</NavLink>
                            </li>}
                
                            {admin && <li className="list-group-item border-0 px-0 fs-5">  
                                <NavLink className={({ isActive }) => (isActive ? 'text-decoration-none text-light px-3 py-1 bg-dark d-block' : 'text-decoration-none text-dark px-3 py-1  d-block')} to="/dashboard/allBlogs"> <i className="fas fa-tasks px-2"></i>Manage All Blogs</NavLink>
                            </li>}
                            
                
                            {/* <li className="list-group-item border-0 px-0 fs-5">
                                <NavLink className={({ isActive }) => (isActive ? 'text-decoration-none text-light px-3 py-1 bg-dark d-block' : 'text-decoration-none text-dark px-3 py-1  d-block')} to="/dashboard/review"><i className="fas fa-mouse px-2"></i> Review</NavLink>
                            </li> */}
                
                            {admin && <li className="list-group-item px-0 border-0 fs-5">  
                                <NavLink className={({ isActive }) => (isActive ? 'text-decoration-none text-light px-3 py-1 bg-dark d-block' : 'text-decoration-none text-dark px-3 py-1  d-block')} to="/dashboard/userBlog"><i className="fas fa-list-alt px-2"></i> Manage User Blogs</NavLink>
                            </li>}
                
                            {admin && <li className="list-group-item border-0 px-0 fs-5">    
                                <NavLink className={({ isActive }) => (isActive ? 'text-decoration-none text-light px-3 py-1 bg-dark d-block' : 'text-decoration-none text-dark px-3 py-1  d-block')} to="/dashboard/addBlog"><i className="fas fa-plus-circle px-2"></i>Add Blog</NavLink>
                            </li>}
                
                
                            <li className="list-group-item border-0 fs-5">  
                                <Button onClick={handleSingOut} variant="danger"><i className="fas fa-sign-out-alt px-2 fs-5"></i> Logout</Button>
                            </li>
                
                            </ul>
                     </div>

                     {/* all-dashboard-route */}
                     <div className="col-12 col-md-9 col-lg-9 border dash-bg">
                         <Outlet/>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default Dashboard;
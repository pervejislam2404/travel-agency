import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const UserBlog = () => {
    const [blogs,setBlogs] = useState([]);
    const [loader,setLoader] = useState(false); 
    const user  = useSelector((state) => state.statesCounter.user) 

   useEffect(() => {
        axios(`https://thawing-waters-18467.herokuapp.com/blogDetailByEmail/${user?.email}`)
        .then(res=>{
            setBlogs(res.data);
        })
    },[user?.email])

       
    return (
        <div  className="overflow-scroll">
             <Table  bordered>
                <thead>
                    <tr className="text-center text-light">
                    <th>Img</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                   {blogs.length && blogs.map((blog)=>{return(
                       <tr className="text-center text-white">
                        <td><img style={{height:'35px', width:'60px'}} alt="img" src={blog.photo}/></td>
                        <td>{blog.price}</td>
                        <td>{blog.date}</td>
                        <td>{blog.name}</td>
                        <td>{blog.email}</td>
                        <td>
                            <Button disabled={ blog.status === 'pending' ? false: true } className="rounded px-3 fw-bold" variant={blog.status === 'pending' ? 'warning':'info'}>{blog.status}</Button>
                        </td>
                       </tr>
                       )}) }
                </tbody>
            </Table>
        </div>
    );
};

export default UserBlog;
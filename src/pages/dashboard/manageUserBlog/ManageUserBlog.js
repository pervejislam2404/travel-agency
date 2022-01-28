import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import  swal from 'sweetalert';

const ManageUserBlog = () => {
    const [blogs,setBlogs] = useState([]);
    const [loader,setLoader] = useState(false); 


    useEffect(() =>{
        axios('http://localhost:4000/userBlogs')
        .then(res=>{
            setBlogs(res.data)
        })
       },[loader])


       const publishBlog = (blog) => {
        delete blog?._id;
        delete blog?.__v;
        if(blog?.email && blog.date){
            axios.post(`http://localhost:4000/addBlog`, blog)
          .then(res=>{
              console.log(res.data);
          })
       }}


       const changeStatus = (id,blog) => {
        axios.put(`http://localhost:4000/changeStatus/${id}`)
        .then(res=>{
            setBlogs(res.data);
            setLoader(true);
            publishBlog(blog)
        })
       }


    //    delete-a-blog
     

    const handleDelete = (id) => {
        swal({
            title: "Are you sure to delete?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:4000/deleteUserBlog/${id}`,{
                    'method': 'DELETE',
                    'content-type': 'application/json'
                })
                .then(res=>{
                    console.log(res);
                    if(res?.statusText === "OK"){
                        swal("Blog has been deleted!", {
                            icon: "success",
                          });
                          const filter = blogs.filter(pd =>pd._id !== id);
                          setBlogs(filter)
                          setLoader(true);
                    }
                })             
            } else {
              swal("Your imaginary file is safe!");
            }
          });      
    }



    return (
        <div className="overflow-scroll m-3">
             <Table bordered hover>
                <thead>
                    <tr className="text-center text-white">
                    <th>Index</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {blogs.length && blogs.map((blog,index)=>{return(
                       <tr className="text-center text-white">
                        <td>{index +1}</td>
                        <td>{blog.price}</td>
                        <td>{blog.date}</td>
                        <td>{blog.name}</td>
                        <td>{blog.email}</td>
                        <td>
                            <Button disabled={ blog.status === 'pending' ? false: true } onClick={()=> changeStatus(blog._id,blog)} className="rounded px-3 fw-bold" variant={blog.status === 'pending' ? 'warning':'info'}>{blog.status}</Button>
                        </td>
                        <td>
                            <Button onClick={()=> handleDelete(blog._id)} variant="danger">Delete</Button>
                        </td>
                       </tr>
                       )}) }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageUserBlog;
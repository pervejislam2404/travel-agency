import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import  swal from 'sweetalert';

const AllBlogs = () => {
    const location = useLocation();
    const [allBlogs,setAllBlogs] = useState([]) 


    useEffect(() =>{
        axios('http://localhost:4000/blogs')
        .then(res=>{
            setAllBlogs(res.data)
        })
       },[])

   document.title=`travel agency -${location.pathname}`; 


//    delete-blog

const handleDelete = (id) => {
    swal({
        title: "Are you sure to delete?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            fetch(`http://localhost:4000/deleteBlog/${id}`,{
                'method': 'DELETE',
                'content-type': 'application/json'
            })
            .then(res=>{
                console.log(res);
                if(res?.statusText === "OK"){
                    swal("Blog has been deleted!", {
                        icon: "success",
                      });
                      const filter = allBlogs.filter(pd =>pd._id !== id);
                     setAllBlogs(filter)
                }
            })             
        } else {
          swal("Your imaginary file is safe!");
        }
      });      
}


    return (
        <div className="overflow-scroll m-2">
           <Table  bordered hover>
                <thead>
                    <tr className="text-center text-light">
                    <th>Index</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {allBlogs.length && allBlogs.map((blog,index)=>{return(
                       <tr className="text-center text-light">
                        <td>{index + 1}</td>
                        <td>{blog.price}</td>
                        <td>{blog.date}</td>
                        <td>{blog.name}</td>
                        <td>{blog.email}</td>
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

export default AllBlogs;
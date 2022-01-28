import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { Button } from 'react-bootstrap';

const AddBlog = () => {
    const location = useLocation();
    document.title=`travel agency -${location.pathname}`;

    const user = useSelector((state) => state.statesCounter.user);
    const admin = useSelector((state) => state.statesCounter.admin);
    console.log(admin);


    const { register, handleSubmit, reset } = useForm();

  // adding-new-product-to-database 

  const onSubmit = (data) => {
        var today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        data.date=today;
        data.name=user?.displayName;
        data.email=user?.email;


        if(admin) {

        // add-blog-to-main-blog
        if(data?.email && data.date){
          axios.post(`http://localhost:4000/addBlog`, data,{
          headers:{
            'content-type':'application/json'
          }
        })
        .then((res) => {
          if (res?.data?._id) {
            swal({
              title: "Blog has been added!",
              icon: "success",
            });
            reset();
          } else {
            swal({
              title: "Oops something happend!",
              icon: "error",
            });
          }
        });
  
      }else{
        swal({
          title: "Oops something missing, try again!",
          icon: "error",
        });
      }
      // end
        }else{
     // adding-blog-to-separate-collection-for-normal-user
         data.status= 'pending'
        if(data?.email && data.date){
          axios.post(`http://localhost:4000/addBlogForUser`, data,{
          headers:{
            'content-type':'application/json'
          }
        })
        .then((res) => {
          if (res?.data?._id) {
            swal({
              title: "Blog has been added!",
              icon: "success",
            });
            reset();
          } else {
            swal({
              title: "Oops something happend!",
              icon: "error",
            });
          }
        });
  
      }else{
        swal({
          title: "Oops something missing, try again!",
          icon: "error",
        });
      }
     
    // end
        }

  };



    return (
        <div>
            <div className="container p-4 rounded">
        <div className="d-flex flex-column justify-content-center align-items-center bg-white p-4">
          
          {/* adding-product-with-information */}
          <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center text-danger fw-bold">
              <h3 className="fw-bold">Add A Product</h3>
            </div>

            <div className="d-flex gap-2 direction-lg-column direction-row ">
                <input
                 style={{ background: "rgb(238 238 238)" }}
                 className="w-100 p-3 fs-5 border-0 my-3 rounded"
                 type="text"
                 {...register("name", { required: true})}
                 placeholder="Traveler Name"
                 />

                    <input
                    style={{ background: "rgb(238 238 238)" }}
                    className="w-100 d-block p-3 fs-5 border-0 my-3 rounded"
                    type="text"
                    {...register("title", { required: true })}
                    placeholder="Title"
                    />

            </div>

            <div className="d-flex gap-2">

                {/* <input
                    style={{ background: "rgb(238 238 238)" }}
                    className=" w-100 p-3 fs-5 border-0 my-3 rounded"
                    type="text"
                    {...register("Info", { required: true})}
                    placeholder="About yourself"
                    /> */}

                    <input
                    style={{ background: "rgb(238 238 238)" }}
                    className="w-100 p-3 fs-5 border-0 my-3 rounded"
                    type="text"
                    {...register("price", { required: true })}
                    placeholder="Price"
                    />
            </div>


           <div className="d-flex gap-2">
                  <input
                    style={{ background: "rgb(238 238 238)" }}
                    className=" w-100 p-3 fs-5 border-0 my-3 rounded"
                    type="text"
                    {...register("location", { required: true })}
                    placeholder="Location"
                    />

                    <select
                    style={{ background: "rgb(238 238 238)" }}
                    className=" w-100 p-3 fs-5 border-0 my-3 rounded "
                     {...register("category")}>
                        <option value="BEAUTY">Beauty</option>
                        <option value="FASHION">Fashion</option>
                        <option value="TRAVEL">Travel</option>
                    </select>
            </div>
 
                  <input
                    style={{ background: "rgb(238 238 238)" }}
                    className=" w-100 p-3 fs-5 border-0 my-3 rounded"
                    type="text"
                    {...register("photo", { required: true })}
                    placeholder="Image link"
                    />

            <textarea
              style={{ background: "rgb(238 238 238)" }}
              className="p-3 w-100 fs-5 border-0 mb-3 rounded"
              rows="5"
              {...register("description", { required: true })}
              placeholder="Description"
            />

            <div className="text-center">
              <Button
                variant="warning"
                className="bg-warning p-2 px-4 fs-5 border-0"
                type="submit"
              >
                Add Product
              </Button>
            </div>
          </form>
        </div>
      </div>
        </div>
    );
};

export default AddBlog;
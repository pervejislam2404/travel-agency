import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import './Blogs.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Rating from "react-rating";
import { useDispatch } from 'react-redux';
import { setBlogInCountry } from '../../../redux/stateSlice/StateSlice';




const Blogs = () => {

    const [pageCount,setPageCount] = useState(0)
    const [page, setPage] = useState(0);
    const [size] = useState(10);
    const [blogs,setBlogs] = useState(); 
    const [topBlogs,setTopBlogs] = useState([]);

    const [bgd,setBgd] = useState(0)
    const [india,setIndia] = useState(0)
    const [amr,setAmr] = useState(0)
    const [canada,setCanada] = useState(0)

    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    
    useEffect(() =>{
     axios('https://thawing-waters-18467.herokuapp.com/blogs')
     .then(res=>{
         setPageCount(Math.ceil(res.data.length/size))
         setBlogs(res.data.slice(size * page, (size * page +10)));
     })

     
    },[page])

    useEffect(() =>{
        const filteredBlog= blogs?.filter(blg=>Number(blg.ratting)>4)
        setTopBlogs(filteredBlog)


        // bg
        const bg = blogs?.filter(blg=>blg.location.toLowerCase() === "bangladesh");
        setBgd(bg?.length)

        //  in
        const ind = blogs?.filter(blg=>blg.location.toLowerCase()=== "india");
        setIndia(ind?.length)

        // america
        const amc = blogs?.filter(blg=>blg.location.toLowerCase()=== "america");
        setAmr(amc?.length)

        // canada
        const cnd = blogs?.filter(blg=>blg.location.toLowerCase()=== "canada");
        setCanada(cnd?.length)

        
    },[blogs])
    
    dispatch(setBlogInCountry({bg:bgd,india:india,amr:amr,canada:canada}))


    const handleCategory = (e)=>{
       const category = e.target.value;
       axios(`https://thawing-waters-18467.herokuapp.com/blogs/${category}`)
        .then(res=>{
            setBlogs(res.data);
        })
    }



    return (
        <div className="blog-bg pt-5">
            <div className="container">
                <div className="row">
                    {/* main-blogs */}
                    <div className="col-12 col-md-12 col-lg-8">

                     

                         <div className="row p-3">
                            {
                              blogs?.length && blogs.map((blog) =>{
                                const {title, name,photo,price,location,date,_id,ratting} = blog  
                                return(
                                  <div onClick={()=>navigate(`/details/${_id}`)} className="col-12 col-md-12 col-lg-12 p-4">
                                      <Card className="border-0 blog-card">
                                          <div className="overflow-hidden p-2">
                                            <Card.Img className="blog-img" style={{height:'25rem'}} variant="top" src={photo} />
                                          </div>
                                            <Card.Body className="px-4 pb-5">
                                                <h1 className="">{title}</h1>
                                                <div className="m-0 my-3">
                                                    <span style={{backgroundColor: '#D67D3E'}} className="rounded-pill px-3 text-light fw-bold p-2">{location}</span>
                                                    <span style={{backgroundColor: '#396EB0'}} className="rounded-pill px-3 text-light fw-bold p-2 ms-4">{price}$</span>
                                                </div>
                                                <div className="">
                                                    <p>{date}</p>
                                                    <p className="text-uppercase">{name}</p>
                                                </div>

                                                {/* react-rating */}
                                                <div className="pb-3">
                                                <Rating
                                                    initialRating={ratting}
                                                    emptySymbol={<i class="far fa-star fs-5 text-warning"></i>}
                                                    fullSymbol={<i class="fas fa-star text-warning fs-5"></i>}
                                                    readonly
                                                /> ({ratting})
                                                </div>
                                                <Button variant="outline-info text-dark fw-bold">Read More</Button>
                                            </Card.Body>
                                        </Card>

                                      
                                  </div>
                              )})
                          }
                         </div>


                       {/* spinner */}
                       <div className="text-center">
                       {!blogs?.length && 
                       <Button 
                            variant="primary" 
                            disabled>
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    Loading...
                       </Button>}

                       </div>

                           {/* pagination */}
                        <div className="d-flex justify-content-center py-5">
                            {
                                [...Array(pageCount).keys()]
                                    .map(number => <button
                                        className={number === page ? 'border bg-primary text-light m-2 rounded' : 'border-0 m-2 rounded'}
                                        key={number}
                                        onClick={() => setPage(number)}
                                    ><div className="px-lg-3 px-md-5 px-3 fs-4 fs-lg-5">{number + 1}</div></button>)
                            }
                        </div>

                    </div>
                    {/* sidebar */}
                    <div  className="col-12 col-md-12 col-lg-4 pt-4">


                    {/* category-type */}

                    <div className="bg-white my-3 shadow p-4">
                        <h5 className="fw-bold text-capitalize mb-4 text-success">select a category to find</h5>
                        <select onChange={(e)=> handleCategory(e)} className="w-100 fs-5 p-2 text-secondary" name="cars" id="cars">
                            <option value="BEAUTY">Beauty</option>
                            <option value="FASHION">Fashion</option>
                            <option value="TRAVEL">Travel</option>
                        </select>
                    </div>






                    {/* traveller-into */}

                    <div className="bg-white my-3 shadow p-0">
                        <div className="p-5">
                            <h5 className="fw-bold text-capitalize text-danger">HI! I'm Pervej Islam</h5>
                            <h6>An adventure travel photographer, professional blogger, and digital nomad.</h6>
                        </div>
                        <img className="w-100" src="https://tripster.axiomthemes.com/wp-content/uploads/2019/06/sidebar-image-copyright-370x178.jpg" alt="" />
                    </div>


                        {/* travel-category */}
                             <div className="bg-light my-3 shadow p-4">
                                 <div className="d-flex py-1 justify-content-between">
                                     <h6 className="fw-bold text-capitalize">bangladesh</h6>
                                     <span class="badge bg-secondary">{bgd}</span>
                                 </div>
                                 <div className="d-flex py-1 justify-content-between">
                                     <h6 className="fw-bold text-capitalize">india</h6>
                                     <span class="badge bg-secondary">{india}</span>
                                 </div>
                                 <div className="d-flex py-1 justify-content-between">
                                     <h6 className="fw-bold text-capitalize">america</h6>
                                     <span class="badge bg-secondary">{amr}</span>
                                 </div>
                                 <div className="d-flex py-1 justify-content-between">
                                     <h6 className="fw-bold text-capitalize">canada</h6>
                                     <span class="badge bg-secondary">{canada}</span>
                                 </div>
                             </div>

                             {/* top-rated-product */}

                             <div className="bg-light my-3 shadow p-3">
                                 <div className="text-center py-3">
                                     <h5 className="fw-bold">TOP RATED BLOGS</h5>
                                 </div>

                                 <div className="row">

                                     {topBlogs?.length && topBlogs.map((blog,index) => {return(
                                         <div key={index} className="">
                                              <div className="row m-1 border blog-card blog-img">
                                                  <div onClick={()=>navigate(`/details/${blog._id}`)} className="col-6 overflow-hidden p-0">
                                                        <img className="" height="70" width="76" src={blog.photo} alt="" />
                                                        <span style={{backgroundColor: '#396EB0'}} className="rounded-pill px-1 text-light p-1 ms-3">{blog.price} $</span>
                                                  </div>
                                                  <div className="col-6 bg-light">
                                                      <p>{blog.title}</p>
                                                  </div>
                                              </div>
                                         </div>
                                     )})}
                                 </div>
                             </div>
                             

                             {/* photographer-advertise */}
                             <div className="bg-light my-3 shadow p-2">
                                  <img className="img-fluid w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXnQiEl-XSHD2gMumVmOqGFWUxsJkB_crQA&usqp=CAU" alt="" />

                                 <div className=" p-3">
                                        <h6 className="fw-bold my-3 text-primary">ALDER CHARRY</h6>
                                        <h6 className="text-secondary fw-bold text-capitalize">World wide topper photographer</h6>
                                        <div className="d-flex py-1 justify-content-between px-4 mt-4">
                                           <span className="p-2 rounded color-border"><i className="fs-1 fab fa-instagram text-danger"></i></span>
                                           <span className="p-2 rounded color-border"><i className="fs-1 fab fa-facebook-square text-primary"></i></span>
                                           <span className="p-2 rounded color-border"><i className="fs-1 fab fa-youtube text-danger"></i></span>
                                           <span className="p-2 rounded color-border"><i className="fs-1 fab fa-linkedin text-info"></i></span>
                                        </div>
                                 </div>
                             </div>

                      
                    </div>
                    
                </div>
                


            </div>
        </div>
    );
};

export default Blogs;
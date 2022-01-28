import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const BlogDetail = () => {
    const {id} = useParams()
    const [blog,setBlog] = useState({})
    const [loader,setLoader] = useState(false)

    const { register, handleSubmit } = useForm();

    const user = useSelector((state) => state.statesCounter.user)
    
    useEffect(() => {
        axios(`http://localhost:4000/blogDetail/${id}`)
        .then(res=>{
            setBlog(res.data[0]);
        })
    },[id, loader]) 
    
    const onSubmit = data => {
        data.photo = user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDgkPQavzX7KwcLzeAsf0fgOx_-D51F3fag&usqp=CAU"; 
        const comment =([...blog?.comment,data]);
        axios.put(`http://localhost:4000/changeComment/${id}`,comment)
        .then((res) => {
            if(res){
                setLoader(true)      
            }
        })
    };
    

    return (
        <div className="blog-bg pt-5">
            <div className="container">
                <div className="row">
                    {/* main-blogs */}
                    <div className="col-12 col-md-9 col-lg-9">
                         <div className="p-3">
                                  <div className="p-4">
                                      <Card className="border-0 blog-card">
                                        <Card.Img  variant="top" src={blog?.photo} />
                                            <Card.Body className="px-5 pb-5">
                                                <h1 className="">{blog.title}</h1>
                                                
                                                <div className="m-0 my-4">
                                                    <span style={{backgroundColor: '#D67D3E'}} className="rounded-pill px-3 text-light fw-bold p-2">{blog?.location}</span>
                                                    <span style={{backgroundColor: '#396EB0'}} className="rounded-pill px-3 text-light fw-bold p-2 ms-4">{blog?.price} $</span>
                                                </div>
                                                <div className="">
                                                    <p className="fw-bold text-secondary">Posted on {blog?.date}</p>
                                                    <p className="text-uppercase fw-bold text-danger fs-5">{blog?.name}</p>
                                                </div>
                                                <Card.Text className="">
                                                         {blog?.description}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                  </div>
                         </div>


                           {/* all-user-comment */}

                           <div className=" p-4">
                              <div className="my-4 p-4 bg-white">

                                <div className="text-center py-3">
                                    <h2>USER SATISFICATION</h2>
                                </div>

                                {blog?.comment && blog.comment.map(comment => {return(
                                    <div className=" ">
                                        <Card.Body className="p-3 cart border m-3 rounded">
                                            <div className="row">
                                                <div className="d-flex justify-content-start align-items-center col-6">
                                                    <img className="rounded-pill me-3" height="60" width="60"  src={comment.photo} alt="" /> 
                                                    <Card.Title>{comment?.name}</Card.Title>
                                                </div>
                                                <Card.Text className="text-muted mt-3 col-6">{comment?.comment}</Card.Text>
                                            </div>
                                        </Card.Body>
                                    </div>
                                )})}
                              </div>
                           </div>


                        
                          {/* comment-form-section */}
                          <div className="my-4 p-4">
                                 <div className="bg-white  p-5">
                                 <form onSubmit={handleSubmit(onSubmit)}>
                                     <div className="row">
                                         <div className="col-6">
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                type="email"
                                                {...register("email",{ required: true})}
                                                placeholder="Email*"
                                                aria-label="Email"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                         </div>
                                         <div className="col-6">
                                         <InputGroup className="mb-3">
                                                <FormControl
                                                type="text"
                                                {...register("name",{ required: true})}
                                                placeholder="Name*"
                                                aria-label="Name"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                         </div>
                                         <div className="col-12">
                                           <textarea
                                            // style={{ background: "rgb(238 238 238)" }}
                                            className="p-3 w-100 fs-5 mt-2 mb-3 rounded"
                                            rows="5"
                                            {...register("comment", { required: true })}
                                            placeholder="Comment*"
                                            />
                                         </div>
                                     </div>
                                         <Button type="submit" variant="primary px-3">submit</Button>
                                   </form>
                                 </div>
                          </div>

                    </div>
                    {/* sidebar */}
                    <div  className="col-ld-3 col-md-3 col-12">

                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem inventore beatae veritatis quas itaque est tempore, vel doloribus fugit dolorem nostrum, repudiandae fugiat voluptate perspiciatis quisquam hic aliquid? Eos assumenda itaque quo deleniti odit tempore, alias repudiandae at reiciendis perferendis officia corrupti. Id nam libero fuga voluptate, qui reprehenderit, dolorem itaque, quisquam veritatis pariatur eius ratione cumque impedit! Dignissimos atque eius, id et earum quam sit similique deserunt cupiditate, nam alias! Autem, consectetur recusandae aliquid, similique rem minima labore facilis possimus sapiente voluptatum tempora nesciunt fugit in aut? Magnam quam mollitia libero maiores cumque error neque velit, cupiditate, illo ut earum excepturi praesentium sunt minima quidem recusandae dolorum architecto corrupti ratione, quas omnis repudiandae amet quasi a? Illum nam quidem, itaque corrupti esse minima earum, rem distinctio adipisci magnam harum blanditiis ad. Fugiat quas accusantium illo ad at distinctio veritatis labore, dolore nemo provident debitis reprehenderit quos molestias reiciendis, placeat quae iusto, dolorem facilis voluptatibus magnam. Sint, asperiores? Laboriosam, obcaecati illo? Enim, inventore! Voluptate perspiciatis pariatur tenetur ipsum accusamus molestiae dignissimos architecto repellendus enim ullam, dicta atque, similique sequi itaque assumenda reiciendis quibusdam reprehenderit distinctio? Perferendis libero eligendi numquam iure inventore cumque sint aliquam neque eos necessitatibus.
                             <div className="sticky-top stickyBox bg-light my-3 shadow p-4">
                                 <div className="d-flex py-1 justify-content-between">
                                     <h6>bangladesh</h6>
                                     <span class="badge bg-secondary">5</span>
                                 </div>
                                 <div className="d-flex py-1 justify-content-between">
                                     <h6>india</h6>
                                     <span class="badge bg-secondary">8</span>
                                 </div>
                                 <div className="d-flex py-1 justify-content-between">
                                     <h6>america</h6>
                                     <span class="badge bg-secondary">3</span>
                                 </div>
                             </div>
                              </p>


                      
                    </div>
                    
                </div>
                


            </div>
        </div>
    );
};

export default BlogDetail;
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Blogs.css'
import axios from 'axios';




const Blogs = () => {

    const [pageCount,setPageCount] = useState(0)
    const [page, setPage] = useState(0);
    const [size] = useState(10);
    const [blogs,setBlogs] = useState() 

    console.log(page);

    useEffect(() =>{
     axios('http://localhost:4000/blogs')
     .then(res=>{
         setPageCount(Math.ceil(res.data.length/size))
         setBlogs(res.data.slice(size * page, (size * page +10)));
     })
    },[page])



    return (
        <div className="blog-bg">
            <div className="container">
                <div className="row">
                    {/* main-blogs */}
                    <div className="col-12 col-md-9 col-lg-9">
                         <div className="row p-3">
                         {
                              blogs?.length && blogs.map((blog) =>{
                                const {title, name,description,photo,price,category,location,date} = blog  
                                return(
                                  <div className="col-12 col-md-12 col-lg-6 p-4">
                                      <Card className="border-0 blog-card">
                                        <Card.Img  variant="top" src={photo} />
                                            <Card.Body className="px-5">
                                                <h1 className="">{title}</h1>
                                                <div className="m-0 my-4">
                                                    <span style={{backgroundColor: '#D67D3E'}} className="rounded-pill px-3 text-light fw-bold p-2">{location}</span>
                                                </div>
                                                <div className="">
                                                    <p>{date}</p>
                                                    <p>{name}</p>
                                                </div>
                                                <Card.Text>
                                                         {description.slice(0,100)}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                  </div>
                              )})
                          }
                         </div>
                           {/* pagination */}
      <div className="d-flex justify-content-center py-5">
          {
            [...Array(pageCount).keys()]
                .map(number => <button
                    className={number === page ? 'border bg-info text-light ' : 'border-0'}
                    key={number}
                    onClick={() => setPage(number)}
                ><div className="px-lg-5 px-md-5 px-3 fs-2 fs-lg-3">{number + 1}</div></button>)
          }
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
                              Quidem, aut debitis. Et odit quidem saepe nostrum perspiciatis, ipsam similique maiores nemo dolor nisi ducimus accusantium nihil, reiciendis culpa mollitia iste facere quia! Rerum ipsa repellat, qui eligendi iusto nulla ullam asperiores magni quisquam quam eaque sit reiciendis veniam odio eveniet. Iure pariatur id consequatur totam mollitia quisquam earum tenetur repudiandae doloremque eius dignissimos quam soluta voluptatum obcaecati necessitatibus, perspiciatis deleniti maxime ipsa eaque odit in veniam explicabo dolor animi. Earum veritatis dignissimos aspernatur impedit obcaecati voluptates pariatur nobis? Omnis quae qui quod, ab tempore doloremque atque repellat temporibus aperiam blanditiis et culpa vitae consequuntur alias voluptas vero sit, recusandae consequatur minus distinctio sequi numquam, facilis corrupti quasi. Quam totam qui iste dicta placeat nihil deleniti, reprehenderit sapiente fuga temporibus, voluptates culpa aut, ut nesciunt asperiores quibusdam amet beatae aliquam. Pariatur mollitia cupiditate sint numquam iste perferendis, repellat atque a sed recusandae, ullam enim saepe, error possimus fuga nostrum tenetur voluptatem impedit qui? Nam ex ratione cupiditate eligendi voluptate culpa harum pariatur amet possimus, et quis quibusdam dolorem? Magnam non libero delectus et soluta, ipsum debitis ipsa totam fugiat tempora recusandae, porro voluptates rem veniam consequatur maiores ipsam officia deleniti in voluptatem sit quisquam. Quaerat assumenda illum necessitatibus ratione, sit dolorum fuga, deserunt voluptate non ea ipsa inventore autem voluptatibus repellendus quasi aspernatur doloremque ex! Saepe odit vero possimus! Dicta est dolorum pariatur delectus cumque ipsum minus quam tempore amet, sit rerum excepturi dignissimos rem porro quidem sunt hic labore repudiandae eius quod. Id mollitia necessitatibus fugiat numquam magni cumque, nemo incidunt voluptatibus nostrum expedita et iure ut tenetur, quisquam ipsum eius neque? Esse quidem optio laboriosam excepturi beatae sed soluta quisquam qui eaque aperiam ipsam consectetur exercitationem sunt in eius dolore harum adipisci at pariatur magni, quam laborum dolores. Facilis excepturi quisquam ex libero asperiores blanditiis error reprehenderit, illo saepe veniam!</p>



                      
                    </div>
                    
                </div>
                


            </div>
        </div>
    );
};

export default Blogs;
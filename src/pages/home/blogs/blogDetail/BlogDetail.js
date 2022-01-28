import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Rating from "react-rating";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loader, setLoader] = useState(false);

  const { register, handleSubmit,reset } = useForm();

  const user = useSelector((state) => state.statesCounter.user);
  const country = useSelector((state) => state.statesCounter.blogInCountry);

  useEffect(() => {
    axios(`https://thawing-waters-18467.herokuapp.com/blogDetail/${id}`).then((res) => {
      setBlog(res.data[0]);
    });
  }, [id, loader]);

  const onSubmit = (data) => {
    data.photo =
      user?.photoURL ||
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rzr5yCjWIMDSeo2uKEkNUIx3yOSwwBZP8w&usqp=CAU";
    const comment = [...blog?.comment, data];
    axios
      .put(`https://thawing-waters-18467.herokuapp.com/changeComment/${id}`, comment)
      .then((res) => {
        if (res) {
          setLoader(Math.random() *55555);
          reset()
        }
      });
  };

  return (
    <div className="blog-bg pt-5">
      <div className="container">
        <div className="row">
          {/* main-blogs */}
          <div className="col-12 col-md-12 col-lg-9">
            <div className="p-3">
              <div className="p-4">
                <Card className="border-0 blog-card">
                  <Card.Img variant="top" src={blog?.photo} />
                  <Card.Body className="px-lg-5 px-3 pb-5">
                    <h1 className="">{blog.title}</h1>

                    <div className="m-0 my-4">
                      <span
                        style={{ backgroundColor: "#D67D3E" }}
                        className="rounded-pill px-3 text-light fw-bold p-2"
                      >
                        {blog?.location}
                      </span>
                      <span
                        style={{ backgroundColor: "#396EB0" }}
                        className="rounded-pill px-3 text-light fw-bold p-2 ms-4"
                      >
                        {blog?.price} $
                      </span>
                    </div>

                    <div className="pb-3">
                      <Rating
                        initialRating={blog.ratting}
                        emptySymbol={
                          <i class="far fa-star fs-5 text-warning"></i>
                        }
                        fullSymbol={
                          <i class="fas fa-star text-warning fs-5"></i>
                        }
                        readonly
                      />{" "}
                      ({blog.ratting})
                    </div>

                    <div className="">
                      <p className="fw-bold text-secondary">
                        Posted on {blog?.date}
                      </p>
                      <p className="text-uppercase fw-bold text-danger fs-5">
                        {blog?.name}
                      </p>
                    </div>
                    <Card.Text className="">{blog?.description}</Card.Text>
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

                {blog?.comment &&
                  blog.comment.map((comment) => {
                    return (
                      <div className=" ">
                        <Card.Body className="p-3 cart border m-3 rounded">
                          <div className="row">
                            <div className="d-flex justify-content-start align-items-center col-12 col-md-6 col-lg-6">
                              <img
                                className="rounded-pill me-3"
                                height="60"
                                width="60"
                                src={comment.photo}
                                alt=""
                              />
                              <Card.Title>{comment?.name}</Card.Title>
                            </div>
                            <Card.Text className="text-muted mt-3  col-12 col-md-6 col-lg-6">
                              {comment?.comment}
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </div>
                    );
                  })}
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
                          {...register("email", { required: true })}
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
                          {...register("name", { required: true })}
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
                  <Button type="submit" variant="primary px-3">
                    submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
          {/* sidebar */}
          <div className="col-lg-3 col-md-12 col-12 pt-4">
            <div className="bg-light my-3 shadow p-4">
              <div className="d-flex py-1 justify-content-between">
                <h6 className="fw-bold text-capitalize">bangladesh</h6>
                <span class="badge bg-secondary">{country?.bg}</span>
              </div>
              <div className="d-flex py-1 justify-content-between">
                <h6 className="fw-bold text-capitalize">india</h6>
                <span class="badge bg-secondary">{country?.india}</span>
              </div>
              <div className="d-flex py-1 justify-content-between">
                <h6 className="fw-bold text-capitalize">america</h6>
                <span class="badge bg-secondary">{country?.amr}</span>
              </div>
              <div className="d-flex py-1 justify-content-between">
                <h6 className="fw-bold text-capitalize">canada</h6>
                <span class="badge bg-secondary">{country?.canada}</span>
              </div>
            </div>


            {/* traveller-into */}

            <div className="bg-white my-3 shadow p-0">
                <div className="p-5">
                    <h5 className="fw-bold text-capitalize text-danger">HI! I'm Pervej Islam</h5>
                    <h6>An adventure travel photographer, professional blogger, and digital nomad.</h6>
                </div>
                <img className="w-100" src="https://tripster.axiomthemes.com/wp-content/uploads/2019/06/sidebar-image-copyright-370x178.jpg" alt="" />
            </div>


            {/* sidebar-for-photographer */}

            <div className="bg-light my-3 shadow p-2">
              <img
                className="img-fluid w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXnQiEl-XSHD2gMumVmOqGFWUxsJkB_crQA&usqp=CAU"
                alt=""
              />

              <div className=" p-3">
                <h6 className="fw-bold my-3 text-primary">ALDER CHARRY</h6>
                <h6 className="text-secondary fw-bold text-capitalize">
                  World wide topper photographer
                </h6>
                <div className="d-flex py-1 justify-content-between px-0 px-lg-4 mt-4">
                  <span className="p-2 rounded color-border">
                    <i className="fs-lg-1 fs-5 fab fa-instagram text-danger"></i>
                  </span>
                  <span className="p-2 rounded color-border">
                    <i className="fs-lg-1 fs-5 fab fa-facebook-square text-primary"></i>
                  </span>
                  <span className="p-2 rounded color-border">
                    <i className="fs-lg-1 fs-5 fab fa-youtube text-danger"></i>
                  </span>
                  <span className="p-2 rounded color-border">
                    <i className="fs-lg-1 fs-5 fab fa-linkedin text-info"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

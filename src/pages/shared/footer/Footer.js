import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark">
           <div className="container text-white">
               <div className="row py-5">
                   <div className="col-lg-3 col-md-3 col-12">
                         <h3>TRAVEL AGENCY</h3>
                         <p style={{color:'lightgray'}} className="py-2">© Copyright pervej islam</p>
                         <img src="https://bazaar.qodeinteractive.com/wp-content/uploads/2017/06/footer-img-2.png" alt="" />
                   </div>

                    <div className="col-lg-3 col-md-3 col-12">
                         <h4>DESTINATIONS</h4>
                         <div style={{color:'lightgray'}} className="ps-2 pt-3">
                            <p>Bangladesh</p>
                            <p>India</p>
                            <p>Srilanka</p>
                            <p>Bhutan</p>
                         </div>
                   </div>

                   <div className="col-lg-3 col-md-3 col-12">
                     <h4>FEATURES</h4>
                    <div style={{color:'lightgray'}} className="ps-2 pt-3">
                        <p>Styleguide</p>
                        <p>Layouts</p>
                        <p>Shortcodes</p>
                        <p>Contact</p>
                        <p>Blog</p>
                    </div>
                   </div>
                   <div className="col-lg-3 col-md-3 col-12">
                         <div className="">
                              <p>Make sure to subscribe to our travel agency and be the first to know the news.</p>
                              <input type="email" className="text-white w-100 p-2" style={{background:'transparent', border:'2px solid white'}} placeholder="email"/>
                              <textarea style={{background:'transparent', border:'2px solid white'}} className="w-100 my-2 bg-none p-2" rows="2" placeholder="comment"></textarea>
                              <input type="submit" className="text-white w-100 p-2" style={{background:'transparent', border:'2px solid red'}} placeholder="email"/>
                         </div>
                   </div>
                  
               </div>
            </div> 
        </div>
    );
};

export default Footer;
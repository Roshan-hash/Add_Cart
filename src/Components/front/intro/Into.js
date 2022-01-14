import React from 'react';
import './Intro.css';

const into = () => {
    return (
        <div>
            <section className="slider_section ">
            <div className="slider_bg_box">
               <img className="slider-image" src="https://html.design/demo/famms/images/slider-bg.jpg" alt="" />
            </div>
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="container ">
                        <div className="row">
                           <div className="col-md-7 col-lg-6 ">
                              <div className="detail-box">
                                 <h1>
                                    <span>
                                    Sale 20% Off
                                    </span>
                                    <br/>
                                    On Everything
                                 </h1>
                                 <p>
                                    Explicabo esse amet tempora quibusdam laudantium, 
                                 </p>
                                 <div className="btn-box">
                                    <a href="" className="btn1">
                                    Shop Now
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        </div>
    )
}

export default into

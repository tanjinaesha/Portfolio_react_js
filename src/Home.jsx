import React from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../src/Home.css'
import img from './profile.jpg'

function Home() {
    
  return (
    <div className='Home'>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand ml-auto" href="/">Esha</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/services">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    
   



      <div class="site-main-wrapper">
        
            
        

       
        <section id="about" class="about">
            <div class="container flex items-center about-inner-wrap">
                <div class="flex-1">
                <img src={img} alt="" />
                </div>
                <div class="flex-1 right">
                    <div>
                    <h3>Assalamualaikum I am Tanjina Islam Esha</h3>
                    <p>
                    I have great knowledge about html, css javascript, python ,react js.I do my best to give quility services to my clients</p></div>
                    
                    
                </div>
               
            </div>
        </section>
        <section id="services" class="services">
            <div class="container">
                <h1 class="section-heading"><span>My </span>skills</h1>
                <p></p>
                <div class="card-wrapper">
                    <div class="card">
                        
                        <h2>html</h2>
                        <p>
                        </p>
                    </div>
                    <div class="card">
                        
                        <h2>css</h2>
                        <p>
                        </p>
                    </div>
                    <div class="card">
                        
                        <h2>js</h2>
                        <p>
                        </p>
                    </div>
                    <div class="card">
                      
                        <h2>Bootstrap</h2>
                        <p>
                        </p>
                    </div>
                    <div class="card">
                        
                        <h2>React</h2>
                        <p>
                        </p>
                    </div>
                    <div class="card">
                      
                        <h2>python</h2>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="reviews">
            <div class="container">
                <h1 class="section-heading"><span>Inte</span>rest </h1>
               
                <div class="slider">
                    <div class="slide">
                        
                        <p> Content creation on youtube</p>
                        <span>I share knowledge  about web development in my youtube channel</span>
                    </div>
           
            </div>
            </div>
        </section>

        <section id="services" class="services">
            <div class="container">
                <h1 class="section-heading"><span>My </span>Projects</h1>
                <p></p>
                <div class="card-wrapper">
                    <div class="card">
                        
                        <h2>E-commerce websites</h2>
                        <p>
                        </p>
                    </div>
                    <div class="card">
                        
                        <h2>Real State websites</h2>
                        <p>
                        </p>
                    </div>
                    <div class="card">
                        
                        <h2>Company websites</h2>
                        <p>
                        </p>
                    </div>
                 
                </div>
            </div>
        </section>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
        <footer className="mt-5 bg-black">
          <div className="container py-5">
              <div className="row">
                  <div className="col-md-3">
                      <h1 className="text-white">Esha</h1>
                      <p className="text-white">A108 Adam Street, New York, NY 535022, United States</p>
                      <p className="text-white">Phone: +0457457 98</p>
                      <p className="text-white">Email: info@esha.com</p>
                  </div>
                  <div className="col-md-2 text-white">
                      <h6>Useful Links</h6>
                      <p>Home</p>
                      <p>About</p>
                      <p>Contact</p>
                     
                      
                      
                      
                  </div>
                  
                  <div class="col-md-4 text-white">
                      <h6>join me</h6>
                   
                      <div class="input-group mb-3">
                          <input type="text" class="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
                        </div>
                  </div>
              </div>
          </div>
          <div class="text-center text-white py-3">
              <p>&copy; Copyright Reveal. All Rights Reserved</p>
          </div>
      </footer>
        
    

    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="./js/app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    
    </div>
    </div>
    )
  };
   
    
  



export default Home;

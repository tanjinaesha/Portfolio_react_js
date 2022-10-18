import React from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import App from "./App";



function Home() {
  return (
    <div className='Home'>
      <div class="site-main-wrapper">
        <button class="hamberger">
            <img src=".assets/images/hamberger.svg" alt=""/>
        </button>

        <div class="mobile-nav">
            <button class="times"><img src=".assets/images/times.svg" alt=""/></button>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Interests</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
        </div>
        <header>
            <div class="container">
                <nav id="main-nav" class="flex items-center justify-between">
                    <div class="left flex items-center">
                        <div class="branding">
                            <img src=".assets/images/logo.svg" alt=""/>
                        </div>
                        <div>
                            <a href="#">Home</a>
                            <a href="#about">About</a>
                            <a href="#services">Skills</a>
                            <a href="#work">Projects</a>
                            <a href="#blog">Interest</a>
                        </div>
                    </div>

                </nav>
                <div class="hero flex items-center justify-between">
                    <div class="left flex-1 flex justify-center">
                        <img src=".assets/images/man.png" alt=""/>
                    </div>
                    <div class="right flex-1">
                        <h6>I am Tanjina islam esha</h6>
                        <h1>I’m a web  <span>Developer</span></h1>
                        <p>
                            I am an educator on youtube
                        </p>
                        <div>
                            <p>subscribe to my channel</p>
                            <button class="btn btn-secondary">subcribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section id="about" class="about">
            <div class="container flex items-center about-inner-wrap">
                <div class="flex-1">
                    <img class="about-me-img" src=".assets/images/man-2.png" alt=""/>
                </div>
                <div class="flex-1 right">
                    <div><h1>About <span>Me</span></h1>
                    <h3>Assalamualaikum I am Tanjina Islam Esha</h3>
                    <p>
                    I have great knowledge about html, css javascript, python ,c, c++, php, flask ,react js.I have a youtube channel where I teach people about coding and web development.</p></div>
                    
                    
                </div>
                <div>
                    <img src="assets/images/esha.jpg" alt="" />
                </div>
            </div>
        </section>
        <section id="services" class="services">
            <div class="container">
                <h1 class="section-heading"><span>My </span>skills</h1>
                <p></p>
                <div class="card-wrapper">
                    <div class="card">
                        
                        <h2>react</h2>
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
                      
                        <h2>php</h2>
                        <p>
                        </p>
                    </div>
                    <div class="card">
                        
                        <h2>python</h2>
                        <p>
                        </p>
                    </div>
                    <div class="card">
                      
                        <h2>flask</h2>
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
                        <span>I teach people about web development in my youtube channel</span>
                    </div>
           
            </div>
            </div>
        </section>

        <section id="work" class="work">
            <div class="container">
                <h1 class="section-heading"><span>My </span> projects</h1>
                <p>I make lots of projects about web development</p>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="overlay">
                            <span></span>
                            <a href="#">Online banking
system with flask and mongodb</a>
                        </div>
                        
                    </div>
                    <div class="card">
                        <div class="overlay">
                            <span></span>
                            <a href="#">Online educational website with html and css</a>
                        </div>
                        
                    </div>
                    <div class="card">
                        <div class="overlay">
                            <span></span>
                            <a href="#">Online course website with php</a>
                        </div>
                        
                    </div>
                    <div class="card">
                        <div class="overlay">
                            <span></span>
                            <a href="#">Restuarant
billing system with python </a>
                        </div>
                       
                    </div>
                    <div class="card">
                        <div class="overlay">
                            <span></span>
                            <a href="#">Bank management system with php</a>
                        </div>
                        
                    </div>
                    <div class="card">
                        <div class="overlay">
                            <span></span>
                            <a href="#">Fitness web with html</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

        
        <footer>
            
            
            <div class="copyright">
                Copyright 2022
            </div>
        </footer>
        
    

    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="./js/app.js"></script>
    
    </div>
    </div>
    )
  };
   
    
  



export default Home;

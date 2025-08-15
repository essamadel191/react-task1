import React from 'react'
import Navbar_comp from '../Navbar/Navbar_comp';
import Footer from '../Footer/Footer';

import aboutStyle from './About.module.css'

const About = () => {
  return (
    <>
    <Navbar_comp/>
    
    <div>
        <div className={`d-flex justify-content-center align-items-center ${aboutStyle.avatarDiv}`}>
            <div className='justify-content-center align-items-center text-white'>
                <div className={`text-center ${aboutStyle.aboutHeader}`}>
                    <h2 className='fs-1 fw-bolder text-uppercase'>about component</h2>
                </div>
                <div className='d-flex justify-content-center align-items-center mb-3'>
                    <div className={`line me-3 bg-white ${aboutStyle.line}`}></div>
                    <i className="fa-solid fa-star me-3"></i>
                    <div className={`line bg-white ${aboutStyle.line}`}></div>
                </div>
                <div className='container'>
                    <div className='row px-5'>
                        <div className=' col-md-6 ps-md-5'>
                            <p>Freelancer is a free bootstrap theme created by Route. 
                                The download includes the complete source files including 
                                HTML, CSS, and JavaScript as well as optional SASS 
                                stylesheets for easy customization.
                            </p>
                        </div>
                        <div className=' col-md-6 ps-md-5'>
                            <p>Freelancer is a free bootstrap theme created by Route. 
                                The download includes the complete source files including 
                                HTML, CSS, and JavaScript as well as optional SASS 
                                stylesheets for easy customization.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default About
import React from 'react'
import Navbar_comp from '../Navbar/Navbar_comp';
import Footer from '../Footer/Footer';
import contactStyle from './Contact.module.css'

const Contact = () => {
  return (
    <>
    <Navbar_comp/>

        <div className={contactStyle.mainformContacts}>
            <div className={`d-flex justify-content-center align-items-center ${contactStyle.avatarDiv}`}>
                <div className='justify-content-center align-items-center text-white'>
                    <div className={`text-center ${contactStyle.aboutHeader}`}>
                        <h2 className='fs-1 fw-bolder text-uppercase'>conatct section</h2>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <div className={`line me-3 ${contactStyle.line}`}></div>
                        <i className={`fa-solid fa-star me-3 ${contactStyle.icon}`}></i>
                        <div className={`line ${contactStyle.line}`}></div>
                    </div>
                </div>
            </div>
            <form className={`container py-5 w-75 mt-5 ${contactStyle.formStyle}`}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputName" placeholder="userName" />
                    <label htmlFor="inputName">userName</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputAge" placeholder="userAge" />
                    <label htmlFor="inputAge">userAge</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="inputEmail" placeholder="userEmail" />
                    <label htmlFor="inputEmail">userEmail</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="inputPassword" placeholder="userPassword" />
                    <label htmlFor="inputPassword">userPassword</label>
                </div>
                <button type="button" className={`btn mt-3 ${contactStyle.formBtn}`}>send Message</button>
            </form>
        </div>

    <Footer/>
    </>
  )
}

export default Contact
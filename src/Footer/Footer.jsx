import React from 'react'
import footerStyle from './Footer.module.css'

const Footer = () => {
  return (
    <>
    <div className={`${footerStyle.footer}`}>
        <div className='d-flex m-auto justify-content-between p-5'>
            <div className={`text-center m-3 w-25`}>
                <h3 className='text-uppercase'>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className={`text-center m-auto w-50`}>
                <h3 className='text-uppercase'>AROUND THE WEB</h3>
                <ul className={`d-flex list-unstyled justify-content-center ${footerStyle.icons}`}>
                    <li><a href=""><i className='fa-brands fa-facebook mx-1'></i></a></li>
                    <li><a href=""><i className='fa-brands fa-twitter mx-1'></i></a></li>
                    <li><a href=""><i className='fa-brands fa-linkedin mx-1'></i></a></li>
                    <li><a href=""><i className='fa-solid fa-globe mx-1'></i></a></li>
                </ul>
            </div>
            <div className={`text-center m-3 w-25 ${footerStyle.footerabout}`}>
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>

    </div>
    <div className={`text-center p-2 ${footerStyle.sign}`}>
        <p className='mt-3'>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}

export default Footer
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar_comp from '../Navbar/Navbar_comp';

import portfolioStyle from './Portfolio.module.css';
import src1 from '../assets/port1.png';
import src2 from '../assets/port2.png';
import src3 from '../assets/port3.png';

const Portfolio = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (imgSrc) => {
        setModalImage(imgSrc);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    const images = [src1, src2, src3, src1, src2, src3];

return (
    <>
    <Navbar_comp/>

    <div className={portfolioStyle.mainformContacts}>
        <div className={`d-flex justify-content-center align-items-center ${portfolioStyle.avatarDiv}`}>
            <div className="text-white text-center">
                <div className={portfolioStyle.aboutHeader}>
                    <h2 className="fs-1 fw-bolder text-uppercase">portfolio component</h2>
                </div>
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <div className={`me-3 ${portfolioStyle.line}`}></div>
                    <i className={`fa-solid fa-star me-3 ${portfolioStyle.icon}`}></i>
                    <div className={`${portfolioStyle.line}`}></div>
                </div>
            </div>
        </div>


        <div className="container pb-5">
            <div className="row g-5">
            {images.map((src, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                <div className={portfolioStyle.imageContainer} onClick={() => openModal(src)}>
                    <img src={src} alt={`portfolio-${index}`} className="w-100 rounded-3" />
                    <div className={portfolioStyle.imageOverlay}>
                    <i className={`fa-solid fa-plus ${portfolioStyle.plusIcon}`}></i>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>


        {modalImage && (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1050 }}
            onClick={closeModal}
        >
            <img src={modalImage} alt="modal" className="img-fluid rounded-3" style={{ maxHeight: '90%', maxWidth: '90%' }} />
        </div>
        )}


    </div>


    <Footer/>
    </>
  );
};

export default Portfolio;

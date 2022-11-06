import React from 'react';
import './index.css'

const Footer = () => {
    return (
        <section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
                <path fill="#1b1b1b" fill-opacity="1" d="M0,256L720,160L1440,288L1440,320L720,320L0,320Z"></path>
            </svg>
            <footer class="text-white text-center pb-3">
                <div class="row mb-3">
                    <div class="col">
                        <a href="https://www.instagram.com/muhammad.d.p/"><i class="ms-2 me-2 bi bi-instagram"></i></a>
                        <a href="https://twitter.com/mdwipamungkas"><i class="ms-2 me-2 bi bi-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/mochamaddwipamungkas/"><i class="ms-2 me-2 bi bi-linkedin"></i></a>
                        <a href="https://github.com/mochamaddwipamungkas"><i class="ms-2 me-2 bi bi-github"></i></a>
                        <a href="https://wa.me/6283804979554"><i class="ms-2 me-2 bi bi-whatsapp"></i></a>
                    </div>
                </div>
                <p>
                    Created With <i class="bi bi-heart-fill text-danger"></i> By
                    <a href="https://google.com" class="text-white fw-bold">
                        Mochamad Dwi Pamungkas</a>
                </p>
            </footer>
        </section>


    );
};

export default Footer;


import React from 'react';
import './index.css'

const About = () => {
    return (
        <section id="about">
            <div class="container">
                <div class="row text-center">
                    <h2 class="display-6">About me</h2>
                </div>
                <div class="row justify-content-center fs-5 text-center">
                    <div class="col-md-4 mt-5 ms-5 me-5">
                        <p>
                            Hallo perkenalkan nama saya <b>Mochamad Dwi Pamungkas</b> saya lulusan sarjana Teknik Informatika. Saya
                            adalah
                            seorang Junior Web Developer
                        </p>
                    </div>
                    <div class="col-md-4 mt-5 ms-5 me-5">
                        <p>
                            Halaman ini adalah website portfolio saya dimana pada halaman ini akan menampilkan project-project yang
                            pernah saya buat
                        </p>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#e4e4e4" fill-opacity="1" d="M0,192L1440,224L1440,320L0,320Z"></path>
            </svg>
        </section>


    );
};

export default About;


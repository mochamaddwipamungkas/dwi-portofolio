import React from 'react';
import './index.css'
import foto from '../img/beranda.jpg'

const Projects = () => {
    return (

        <section id="projects" class="projects">
            <div class="container">
                <div class="row text-center">
                    <h2 class="display-6 mb-5">My Projects</h2>
                </div>
                <div class="row mt-3 justify-content-center">
                    <div class="col-md-6 mb-5">
                        <div class="card shadow">
                            <img src={foto} class="card-img-top" alt="..." />
                            <div class="card-body text-center ">
                                <h3 class="card-title mt-5 ">Website Toko Online</h3>

                                <div class="mt-5">
                                    <a href="https://github.com/mochamaddwipamungkas/dwi-project-frontend" class="btn btn-primary ms-auto me-2" target="blank">Github</a>
                                    <a href="https://dwi-frontend-tugas.herokuapp.com/" class="btn btn-primary ms-2 me-2" target="blank" >Live Demo</a>
                                    <a href="detailproject" class="btn btn-primary ms-2 me-auto" >Detail</a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fill-opacity="1" d="M0,192L1440,160L1440,320L0,320Z"></path>
            </svg>
        </section>

    );
};

export default Projects;


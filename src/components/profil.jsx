import React from 'react';
import './index.css'
import foto from '../img/profil.jpg'

const Profil = () => {
    return (

        <section id="profil" class="profil text-center">
            <img src={foto} alt="Mochamad Dwi Pamungkas" width="200"
                class="rounded-circle img-thumbnail shadow" />
            <h1 class="display-5">Mochamad Dwi Pamungkas</h1>
            <p class="lead">Web Developer</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                <path fill="#ffffff" fill-opacity="1" d="M0,32L720,128L1440,32L1440,320L720,320L0,320Z"></path>
            </svg>
        </section>

    );
};

export default Profil;


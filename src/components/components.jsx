import React from 'react';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Navbar from './navbar';
import Profil from './profil';
import Projects from './projects';

const Components = () => {
    return (
        <div>
            <Navbar />
            <Profil />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Components;


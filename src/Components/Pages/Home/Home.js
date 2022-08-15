import React from 'react'
import Navbar from '../../Navbar'
import Tool from '../../Tool'
import './Home.css'
import { SiPython, SiJava, SiRstudio, SiFlutter, SiReact, SiCss3, SiPostgresql, SiLinkedin, SiGithub } from "react-icons/si";
import MailButton from '../../MailButton';

import Particles from 'react-tsparticles';
import particlesConfig from '../../particlesConfig';

const Home = () => {
    return (
        <div className='home-container'>


            {/* Title */}
            <div className='home-title-container font-open-sans home-background'>
                <h1 className='font-m-plus-rounded home-title-text' >
                    Hello!
                </h1>
                <h2 className='home-subtitle-text'>
                    I'm <span>David</span>, a software developer based in Bogotá, Colombia
                </h2>
            </div>

            <div className='home-profile-img'>
                <img src='./profilePicture.jpeg'></img>
            </div>
            {/* About Me */}
            <div className='home-aboutme-container font-open-sans home-background'>
                <h2 className='font-m-plus-rounded home-underline home-underline home-underline'>
                    About me
                </h2>
                <p>
                    I'm David Meléndez and I'm currently a student at Universidad
                    del Rosario. I consider myself an entrepreneur, a self-taught
                    person, and someone who has lots of different ideas to offer. I'm currently
                    building a dating app called glera.
                </p>
            </div>

            {/* Tools */}
            <div className='home-tools-container font-open-sans home-background'>
                <h2 className='font-m-plus-rounded home-underline'>
                    Skills
                </h2>
                {/* <p>
                    Here are some tools that I have experience working with
                </p> */}
                <div className='home-tools-view'>
                    <Tool icon={<SiPython size={80} />} title={'Python'} hoverColor={'#356C9B'} />
                    <Tool icon={<SiFlutter size={80} />} title={'Flutter'} hoverColor={'#50BBEB'} />
                    <Tool icon={<SiRstudio size={80} />} title={'R'} hoverColor={'#75AADB'} />
                    <Tool icon={<SiReact size={80} />} title={'React Js'} hoverColor={'#5CCFEE'} />
                    <Tool icon={<SiPostgresql size={80} />} title={'SQL'} hoverColor={'#6295CB'} />
                    <Tool icon={<SiJava size={80} />} title={'Java'} hoverColor={'#EB901C'} />

                </div>
            </div>

            {/* Bio */}
            <div className='home-bio-container font-open-sans home-background'>
                <h2 className='font-m-plus-rounded home-underline'>
                    Bio
                </h2>
                <div className='home-bio-list'>
                    <div className='home-bio-flex-container'>
                        <h3>2022</h3>
                        <p> Part time job at Atynea as Full Stack Developer</p>
                    </div>
                    <div className='home-bio-flex-container'>
                        <h3>2019</h3>
                        <p>Studying Applied Mathematics and Computer Science at Universidad del Rosario</p>
                    </div>
                    <div className='home-bio-flex-container'>
                        <h3>2019</h3>
                        <p>CS Bridge: Java Software Development Course taught by Stanford University at Universidad de los Andes</p>
                    </div>
                </div>
            </div>

            {/* Projects */}
            {/* <div>
                Click here to check my projects
            </div> */}

            {/* Contact */}
            <div className='home-contact-container font-open-sans home-background'>
                <h2 className='font-m-plus-rounded home-underline'>
                    Contact
                </h2>
                <h3 className='font-m-plus-rounded'>Lets get in touch!</h3>
                <div>
                    <MailButton />
                </div>
            </div>

            {/* Social Media */}
            <div className='home-socialmedia-container home-background'>
                <a href='https://www.linkedin.com/in/david-mel%C3%A9ndez-439901204/' target="_blank"><SiLinkedin size={30} /></a>
                <a href='https://github.com/sleepypower/' target="_blank"><SiGithub size={30} /></a>
            </div>


            {/* <div className='footer font-open-sans'>
                I made this website with ReactJs
            </div> */}

        </div>
    )
}

export default Home
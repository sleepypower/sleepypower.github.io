import React from 'react'
import Navbar from '../../Navbar'
import Tool from '../../Tool'
import './Home.css'
import { SiPython, SiJava, SiRstudio, SiFlutter, SiReact, SiCss3, SiPostgresql } from "react-icons/si";
import MailButton from '../../MailButton';

const Home = () => {
    return (
        <div className='home-container'>

            {/* Title */}
            <div className='home-title-container font-open-sans'>
                <h1 className='font-m-plus-rounded home-title-text' >
                    Hello!
                </h1>
                <h2 className='home-subtitle-text'>
                    I'm <span>David</span>, a software developer based in Bogotá, Colombia
                </h2>
            </div>

            {/* About Me */}
            <div className='home-aboutme-container font-open-sans'>
                <h2 className='font-m-plus-rounded'>
                    About me
                </h2>
                <p>
                    I seek to learn and apply my knowledge to create meaningful
                    things. I'm currently studying to be a data scientist, but
                    I love to make apps and web-pages as a hobby. I'm also working
                    on my dating app called glera.
                </p>

            </div>

            {/* Tools */}
            <div className='home-tools-container font-open-sans'>
                <h2 className='font-m-plus-rounded'>
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
            <div className='home-bio-container font-open-sans'>
                <h2 className='font-m-plus-rounded'>
                    Bio
                </h2>
                <div className='home-bio-list'>
                    <div className='home-bio-flex-container'>
                        <h3>2019</h3>
                        <p> Graduated school at <span>Gimnasio Vermont</span> in Bogotá, Colombia</p>
                    </div>
                    <div className='home-bio-flex-container'>
                        <h3>2019</h3>
                        <p>CS Bridge: Java Software Development Course taught by Stanford University at Universidad de los Andes</p>
                    </div>
                    <div className='home-bio-flex-container'>
                        <h3>2019</h3>
                        <p>Studying Applied Math and Computer Science at Universidad del Rosario</p>
                    </div>
                    <div className='home-bio-flex-container'>
                        <h3>2022</h3>
                        <p> Part time job at Atynea as Full Stack Developer</p>
                    </div>

                </div>
            </div>

            {/* Contact */}
            <div className='home-contact-container font-open-sans'>
                <h2 className='font-m-plus-rounded'>
                    Contact
                </h2>
                <h3>Lets get in touch!</h3>
                <div>
                    <MailButton />
                </div>
            </div>

            <div className='footer font-open-sans'>
                I made this website with ReactJs
            </div>

            you can also check my linked in and github
            <div className=''>

            </div>


        </div>
    )
}

export default Home
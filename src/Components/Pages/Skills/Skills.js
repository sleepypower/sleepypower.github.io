import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <div className='skills-container'>

            <h1 className='skills-title font-m-plus-rounded'>Skills</h1>
            {/* Python */}
            <div className='home-aboutme-container font-open-sans' id='python'>
                <h2 className='font-m-plus-rounded'>
                    Python
                </h2>
                <p>
                    Worked with Object oriented programming and pandas. I'm
                    currently learning to become a data scientist. Implemented a
                    sudoku solver as final project for Harvard's CS50
                    introduction to computer science. Currently enrolled in
                    datacamp's data scientist with python certification and
                    Andrew Ng's machine Learning specialization.

                </p>

            </div>

            {/* Flutter */}
            <div className='home-aboutme-container font-open-sans' id='flutter'>
                <h2 className='font-m-plus-rounded'>
                    Flutter
                </h2>
                <p>
                    Currently building a dating app called glera. Implementation
                    uses Model-View-Controller and Firebase as database.
                </p>

            </div>

            {/* R */}
            <div className='home-aboutme-container font-open-sans' id='r'>
                <h2 className='font-m-plus-rounded'>
                    R
                </h2>
                <p>
                    Have worked with statistical models such as
                    Linear Regression,
                    Logistic Regression,
                    Hypothesis Testing,
                    Anova,
                    Manova,
                    T-tests,
                    PCA,
                    Data Visualization and Exploratory Analysis.
                </p>

            </div>

            {/* React Js */}
            <div className='home-aboutme-container font-open-sans' id='reactjs'>
                <h2 className='font-m-plus-rounded'>
                    React Js
                </h2>
                <p>
                    Working on the landing page and main website for Atynea. Fun
                    fact, this website uses react js.
                </p>

            </div>

            {/* SQL */}
            <div className='home-aboutme-container font-open-sans' id='sql'>
                <h2 className='font-m-plus-rounded'>
                    SQL
                </h2>
                <p>
                    Creation of databases with fourth normal form. Select, Joins
                    Group By, aggregate functions.
                </p>

            </div>

            {/* C++ */}
            <div className='home-aboutme-container font-open-sans' id='cpp'>
                <h2 className='font-m-plus-rounded'>
                    C++
                </h2>
                <p>
                    Implemented basic data structures such as lists, stacks,
                    hashmaps, hashsets, binary trees, balanced binary trees.
                </p>

            </div>

            {/* Java */}
            <div className='home-aboutme-container font-open-sans' id='java'>
                <h2 className='font-m-plus-rounded'>
                    Java
                </h2>
                <p>
                    Learned the fundamentals of software development in CS Bridge,
                    taught by Stanford University.
                </p>

            </div>


        </div>
    )
}

export default Skills
import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <div className='skills-container'>

            <h2 className='home-subtitle-text'>Skills</h2>
            {/* Python */}
            <div className='home-aboutme-container font-open-sans'>
                <h2 className='font-m-plus-rounded'>
                    Python
                </h2>
                <p>
                    Worked with Object oriented programming, pandas. I'm
                    currently learning to become data scientist. Implemented a
                    sudoku solver as a final project for Harvard's CS50
                    introduction to computer science. Currently enrolled in
                    datacamp's data scientist with python certification.

                </p>

            </div>

            {/* Flutter */}
            <div className='home-aboutme-container font-open-sans'>
                <h2 className='font-m-plus-rounded'>
                    Flutter
                </h2>
                <p>
                    Currently building a dating app called glera. Implementation
                    uses Model-View-Controller and databases such as Firebase
                    and MongoDatabase.

                </p>

            </div>

            {/* R */}
            <div className='home-aboutme-container font-open-sans'>
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
            <div className='home-aboutme-container font-open-sans'>
                <h2 className='font-m-plus-rounded'>
                    React Js
                </h2>
                <p>
                    Working on the landing page and main website for Atynea. Fun
                    fact, this website uses react js.
                </p>

            </div>

            {/* SQL */}
            <div className='home-aboutme-container font-open-sans'>
                <h2 className='font-m-plus-rounded'>
                    SQL
                </h2>
                <p>
                    Creation of databases with fourth normal form. Select, Joins
                    Group By, aggregate functions.
                </p>

            </div>

            {/* C++ */}
            <div className='home-aboutme-container font-open-sans'>
                <h2 className='font-m-plus-rounded'>
                    C++
                </h2>
                <p>
                    Implemented basic data structures such as lists, stacks,
                    hashmaps, hashsets, binary trees, balanced binary trees.
                </p>

            </div>

            {/* Java */}
            <div className='home-aboutme-container font-open-sans'>
                <h2 className='font-m-plus-rounded'>
                    Java
                </h2>
                <p>
                    Learned the fundamentals of software development on a course
                    named CS Bridge, taught by Stanford University.
                </p>

            </div>


        </div>
    )
}

export default Skills
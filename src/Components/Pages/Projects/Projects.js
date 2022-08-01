import React from 'react'
import ProjectItem from '../../ProjectItem'
import './Projects.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {

    const responsive = {
        mobile: {
            breakpoint: { max: 10000, min: 0 },
            items: 1
        }
    };

    const items = [
        <ProjectItem
            body_text='Zao shang hao'
            title='Med Project'
            img_url={'https://images.ecestaticos.com/Bosqgwi-bRoiiu2s89AjrlamxUE=/0x70:1716x1040/1338x751/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg'}
            project_url={'https://github.com/sleepypower/proyecto_medico'} />,
        <ProjectItem
            body_text='Zao shang hao'
            title='Med Project'
            img_url={'https://images.ecestaticos.com/Bosqgwi-bRoiiu2s89AjrlamxUE=/0x70:1716x1040/1338x751/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg'}
            project_url={'https://github.com/sleepypower/proyecto_medico'} />,
        <ProjectItem
            body_text='Zao shang hao'
            title='Med Project'
            img_url={'https://images.ecestaticos.com/Bosqgwi-bRoiiu2s89AjrlamxUE=/0x70:1716x1040/1338x751/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg'}
            project_url={'https://github.com/sleepypower/proyecto_medico'} />

    ]

    return (
        <div className='projects-container'>
            <div className="projects-carousel-container">

                {/* Current Projects */}
                <div>

                    <div className='projects-personal-container font-open-sans home-background'>
                        <h2 className='font-m-plus-rounded home-underline'>
                            Current Projects
                        </h2>
                        Projects that I'm currently doing
                    </div>

                    <Carousel responsive={responsive}
                        swipeable={false}
                        draggable={false}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        itemClass='carousel-container-item'>
                        <div>
                            <ProjectItem
                                body_text='Gain the career-building Python skills you need to succeed in the exciting field of data science—from data manipulation to machine learning! In this track, you’ll learn how this versatile language allows you to import, clean, manipulate, and visualize data—all integral skills for any aspiring data professional or researcher. Through interactive exercises, you’ll get hands-on with some of the most popular Python libraries, including pandas, NumPy, Matplotlib, and many more. '
                                title='Data Camp: Data Scientist with python'
                                img_url={'https://res.cloudinary.com/dyd911kmh/image/upload/f_auto,q_auto:best/v1603223608/DC_New_mugdv8.png'}
                                project_url={'https://www.datacamp.com/tracks/data-scientist-with-python'} />
                        </div>
                        <div>
                            <ProjectItem
                                body_text="The Machine Learning Specialization is a foundational online program created in collaboration between DeepLearning.AI and Stanford Online. This beginner-friendly program will teach you the fundamentals of machine learning and how to use these techniques to build real-world AI applications."
                                title='Machine Learning Specialization Stanford ~ Deep Learning Ai'
                                img_url={'https://gisgeography.com/wp-content/uploads/2022/01/DeepLearningAI-300x300.png'}
                                project_url={'https://es.coursera.org/specializations/machine-learning-introduction'} />
                        </div>


                    </Carousel>
                </div>

                {/* Finished* Projects */}
                <div>

                    <div className='projects-personal-container font-open-sans home-background'>
                        <h2 className='font-m-plus-rounded home-underline'>
                            Finished*  Projects
                        </h2>
                        Some projects that I have done over my years of
                        programming. They are not finished because they can
                        always be improved.
                    </div>

                    <Carousel responsive={responsive}
                        swipeable={false}
                        draggable={false}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        itemClass='carousel-container-item'>
                        <div>
                            <ProjectItem
                                body_text='Build a visual experiment to determine some capabilites of the human eye and brain. The project was made using Python and Pygame'
                                title='Med Project'
                                img_url={'https://images.pexels.com/photos/9799276/pexels-photo-9799276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                project_url={'https://github.com/sleepypower/proyecto_medico'} />
                        </div>
                        <div>
                            <ProjectItem
                                body_text="For the final project of Harvard's Cs50 Course, I built a sudoku solver using python and a backtracking algorithm that tried all the possibilities until finally getting a solution"
                                title='Sudoku Solver'
                                img_url={'https://images.pexels.com/photos/6975084/pexels-photo-6975084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                project_url={'https://github.com/sleepypower/Sudoku-Solver'} />
                        </div>
                        <div>
                            <ProjectItem
                                body_text='Build a weather app using flutter that fetched a weather api in real time. More information about weather was given like humidity, pressure, etc'
                                title='Weather App'
                                img_url={'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                project_url={'https://github.com/sleepypower/weather-app'} />
                        </div>
                        <div>
                            <ProjectItem
                                body_text='An app build to visualize data from hydroponic crops to keep users updated of the state of their crops. Uses Flutter as the front end and Firebase as backend and follows the Model View Controller software architectural pattern.'
                                title='Hydroponics app'
                                img_url={'https://images.pexels.com/photos/4199758/pexels-photo-4199758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                project_url={'https://github.com/sleepypower/Cultivo-hidroponico'} />
                        </div>


                    </Carousel>
                </div>


            </div>
            {/* <ProjectItem
                body_text='Zao shang hao'
                title='Med Project'
                img_url={'https://images.ecestaticos.com/Bosqgwi-bRoiiu2s89AjrlamxUE=/0x70:1716x1040/1338x751/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg'}
                project_url={'https://github.com/sleepypower/proyecto_medico'} /> */}
        </div>
    )
}

export default Projects
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
                        Projects that im currently doing
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
                                img_url={'https://images.ecestaticos.com/Bosqgwi-bRoiiu2s89AjrlamxUE=/0x70:1716x1040/1338x751/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg'}
                                project_url={'https://github.com/sleepypower/proyecto_medico'} />
                        </div>
                        <div>
                            <ProjectItem
                                body_text="For the final project of Harvard's Cs50 Course, I built a sudoku solver using python and a backtracking algorithm that tried all the possibilities until finally getting a solution"
                                title='Sudoku Solver'
                                img_url={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sudoku_resuelto_completo.png/300px-Sudoku_resuelto_completo.png'}
                                project_url={'https://github.com/sleepypower/proyecto_medico'} />
                        </div>
                        <div>
                            <ProjectItem
                                body_text='Build a weather app using flutter that fetched a weather api in real time. More information about weather was given like humidity, pressure, etc'
                                title='Weather App'
                                img_url={'https://images.theconversation.com/files/232705/original/file-20180820-30593-1nxanpj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'}
                                project_url={'https://github.com/sleepypower/proyecto_medico'} />
                        </div>
                        <div>
                            <ProjectItem
                                body_text='An app build to visualize data from hydroponic crops to keep users updated of the state of their crops. Uses Flutter as the front end and Firebase as backend and follows the Model View Controller software architectural pattern.'
                                title='Hydroponics app'
                                img_url={'https://puregreensaz.com/wp-content/uploads/2020/01/container-growth-1024x768.jpeg'}
                                project_url={'https://github.com/sleepypower/proyecto_medico'} />
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
                                img_url={'https://images.ecestaticos.com/Bosqgwi-bRoiiu2s89AjrlamxUE=/0x70:1716x1040/1338x751/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg'}
                                project_url={'https://github.com/sleepypower/proyecto_medico'} />
                        </div>
                        <div>
                            <ProjectItem
                                body_text="For the final project of Harvard's Cs50 Course, I built a sudoku solver using python and a backtracking algorithm that tried all the possibilities until finally getting a solution if it exists"
                                title='Sudoku Solver'
                                img_url={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sudoku_resuelto_completo.png/300px-Sudoku_resuelto_completo.png'}
                                project_url={'https://github.com/sleepypower/proyecto_medico'} />
                        </div>
                        <div>
                            <ProjectItem
                                body_text='Build a weather app using flutter that fetched a weather api in real time. More information about weather was given like humidity, pressure, etc'
                                title='Weather App'
                                img_url={'https://images.theconversation.com/files/232705/original/file-20180820-30593-1nxanpj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'}
                                project_url={'https://github.com/sleepypower/proyecto_medico'} />
                        </div>

                        <div>
                            <ProjectItem
                                body_text='An app build to visualize data from hydroponic crops to keep users updated of the state of their crops. Uses Flutter as the front end and Firebase as backend and follows the Model View Controller software architectural pattern.'
                                title='Hydroponics app'
                                img_url={'https://puregreensaz.com/wp-content/uploads/2020/01/container-growth-1024x768.jpeg'}
                                project_url={'https://github.com/sleepypower/proyecto_medico'} />
                        </div>

                    </Carousel>
                </div>

                {/* Courses */}
                <div>

                    <div className='projects-personal-container font-open-sans home-background'>
                        <h2 className='font-m-plus-rounded home-underline'>
                            Courses
                        </h2>
                        Some courses that I have taken
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
                                body_text='Placeholder'
                                title='Med Project'
                                img_url={'https://images.ecestaticos.com/Bosqgwi-bRoiiu2s89AjrlamxUE=/0x70:1716x1040/1338x751/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg'}
                                project_url={'https://github.com/sleepypower/proyecto_medico'} />
                        </div>
                        <div>
                            <ProjectItem
                                body_text='Placeholder'
                                title='Med Project'
                                img_url={'https://images.ecestaticos.com/Bosqgwi-bRoiiu2s89AjrlamxUE=/0x70:1716x1040/1338x751/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg'}
                                project_url={'https://github.com/sleepypower/proyecto_medico'} />
                        </div>
                        <div>
                            <ProjectItem
                                body_text='Placeholder'
                                title='Med Project'
                                img_url={'https://images.ecestaticos.com/Bosqgwi-bRoiiu2s89AjrlamxUE=/0x70:1716x1040/1338x751/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg'}
                                project_url={'https://github.com/sleepypower/proyecto_medico'} />
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
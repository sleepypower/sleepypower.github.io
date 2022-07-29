import React from 'react'
import './ProjectItem.css'

const ProjectItem = ({ body_text, title, img_url, project_url }) => {
    return (
        <div className='projectitem-container font-open-sans' >
            <div className='projectitem-image'>
                <img src={img_url}></img>
            </div>
            <div className='projectitem-text-container'>

                <div className='projectitem-text-body'>
                    {body_text}
                </div>
                <div>
                    <div className='projectitem-text-title font-m-plus-rounded'>
                        {title}
                    </div>
                    <div className='projectitem-text-link font-m-plus-rounded'>
                        <a href={project_url} target="_blank" className='projectitem-text-link'>Visit Project</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProjectItem
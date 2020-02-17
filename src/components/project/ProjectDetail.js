import React from 'react'

const ProjectDetail = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Important Project!!Important Project!!Important Project!!Important Project!!Important Project!!Important Project!!Important Project!!</p>
                </div>
                <div className="card-action gret leighten-4 grey-text">
                    <div>Posted by Hello Project</div>
                    <div>17th Feb, 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail

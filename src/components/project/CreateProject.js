import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectAction'

const CreateProject = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleChange = (e) => {
        this.setTitle({
            [e.target.title]: e.target.value
        })
        this.setContent({
            [e.target.content]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <label>Title</label>
                <input type="text" id="title" onChange={handleChange}/>
                <label>Content</label>
                <input type="text" id="content" onChange={handleChange}/>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return(
        createProject: (project) => dispatch(createProject(project));
    )
}

export default connect(null, mapDispatchToProps)(CreateProject);
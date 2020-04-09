import React, {Component} from 'react'
import Notification from './Notifications'
import ProjectList from '../project/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render(){
        console.log(this.prop);
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateProps = (state) => {
    return{
        projects: state.project.projects
    }
}

export default connect(mapStateProps)(Dashboard)
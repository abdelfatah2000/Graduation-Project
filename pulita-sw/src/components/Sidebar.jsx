import { Component } from "react";
import { Link } from "react-router-dom";
import '../css/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolarPanel, faChartSimple, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



class Sidebar extends Component {

    render() {
        return (<>
            <div className="sidebar">
                <div className="logo">
                    <FontAwesomeIcon icon={faSolarPanel} className="icon" color="#4b7efe" />
                    <h1>Pulita Analytics</h1>
                </div>
                <ul>
                    <li><FontAwesomeIcon icon={faChartSimple} className="predict-icon" /></li>
                    <li><FontAwesomeIcon icon={faMagnifyingGlass} className="detect-icon" /></li>
                </ul>
            </div>
        </>
        )
    }
}



export default Sidebar;
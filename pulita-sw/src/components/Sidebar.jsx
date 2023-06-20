import { Component } from "react";
import { Link } from "react-router-dom";
import '../css/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolarPanel, faChartSimple, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";



class Sidebar extends Component {
    
    render() {
        let url = window.location.pathname.slice(1);
        
        return (<>
            <div className="sidebar">
                <div className="logo">
                    <FontAwesomeIcon icon={faSolarPanel} className="icon" color="#4b7efe" />
                    
                    <h1>Pulita {url}</h1>
                </div>
                <ul>
                    <li><NavLink to="/prediction" activeClassName="active" className="link" id="pred"> <FontAwesomeIcon icon={faChartSimple} className="predict-icon" /> </NavLink></li>
                    <li><NavLink to="/detection" activeClassName="active" className="link" id="detect"> <FontAwesomeIcon icon={faMagnifyingGlass} className="detect-icon" /> </NavLink></li>
                </ul>
            </div>
        </>
        )
    }
}



export default Sidebar;
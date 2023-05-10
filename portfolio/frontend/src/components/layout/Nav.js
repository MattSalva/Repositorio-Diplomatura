import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="ctr">
                <ul className="nav justify-content-center nav-tabs">
                    <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/education" className="nav-link">Education</NavLink></li>
                    <li className="nav-item"><NavLink to="/experience" className="nav-link">Experience</NavLink></li>
                    <li className="nav-item"><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
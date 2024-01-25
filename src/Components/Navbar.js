import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">NewsMonkey</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/" activeClassName="active">Home</NavLink>
                                </li>
                                <li className="nav-item"><NavLink className="nav-link" to="/business" activeClassName="active">Business</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/entertainment" activeClassName="active">Entertainment</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/general" activeClassName="active">General</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/health" activeClassName="active">Health</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/science" activeClassName="active">Science</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/sports" activeClassName="active">Sports</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/technology" activeClassName="active">Technology</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

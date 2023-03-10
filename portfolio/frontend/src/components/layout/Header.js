import React from "react";

const Header = (props) => {
    return(
        <header>
            <div className="ctr">
                <img src="img/header/perfil.jpg" alt="foto de perfil" className="img-thumbnail border-primary"/>
                    <h1>Mathias Salva</h1>
                    <h2>Curriculum Vitae</h2>
                    <div className="social">
                        <ul>
                            <li><a href="https://twitter.com/mercu_s"><i className="bi bi-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/matth__s/"><i className="bi bi-instagram"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/in/mathias-alejandro-salva-868655127/"><i
                                className="bi bi-linkedin"></i></a></li>
                            <li><a href="https://github.com/MattSalva"><i className="bi bi-github"></i></a></li>
                        </ul>
                    </div>
            </div>
        </header>
    );
}

export default Header
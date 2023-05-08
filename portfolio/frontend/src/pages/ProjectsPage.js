import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProjectsItem from "../components/projects/ProjectsItem";

const ProjectsPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const cargarProjects = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/projects');
            setProjects(response.data);
            setLoading(false);
        };

        cargarProjects();
    }, []);

    return (
        <section className="holder">
            <h2>Projects</h2>
            {loading ? ( <p>Loading...</p>) : (
                projects.map(item => <ProjectsItem key={item.id} title={item.title}
                                                   description={item.description}
                                                   start_date={item.start_date}
                                                   end_date={item.end_date}
                                                   image={item.image}
                                                    body={item.body} />)
            )}
        </section>
    );
}

export default ProjectsPage

// const ProjectsPage = (props) => {
//     return(
//         <main>
//         <section>
//             <div className="container-fluid d-inline-flex justify-content-around flex-wrap">
//                 <div className="card mb-3" style={{maxWidth: '540px'}}>
//                     <div className="row g-0">
//                         <div className="col-md-4">
//                             <img
//                                 src="https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU"
//                                 className="img-fluid rounded-start" alt="..."/>
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h5 className="card-title">Tic-Tac-Toe</h5>
//                                 <p className="card-text">Un tic-tac-toe sin interfaz gráfica realizado puramente con
//                                     Python 3 a
//                                     modo de práctica</p>
//                             </div>
//                             <div className="github-link"><a href="https://github.com/MattSalva/tictoc"><i
//                                 className="bi bi-github"></i></a></div>
//
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="card mb-3" style={{maxWidth: '540px'}}>
//                     <div className="row g-0">
//                         <div className="col-md-4">
//                             <img
//                                 src="https://resizer.glanacion.com/resizer/sWqXZNsaoIEk6VyYsYT-30Iq9Us=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/JWY2ZQMN7FDAXOKHZTDWL5GYZA.png"
//                                 className="img-fluid rounded-start" alt="..."/>
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h5 className="card-title">Portfolio</h5>
//                                 <p className="card-text">Un portfolio personal con un backend armado en Java con Spring
//                                     Boot y
//                                     un frontend armado en Angular, ambos montados en infraestructura red, con una base
//                                     de
//                                     datos MySQL</p>
//                                 <div>
//                                     <a href="https://frontend-mathiassalva.web.app/"
//                                        target="_blank">https://frontend-mathiassalva.web.app/</a>
//                                 </div>
//                             </div>
//                             <div className="github-link"><a href="https://github.com/MattSalva/portfolio-FrontEnd"> <i
//                                 className="bi bi-github">Frontend</i></a> <a
//                                 href="https://github.com/MattSalva/portfolio-BackEnd"> <i className="bi bi-github">Backend</i></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="card mb-3" style={{maxWidth: '540px'}}>
//                     <div className="row g-0">
//                         <div className="col-md-4">
//                             <img
//                                 src="https://store-images.s-microsoft.com/image/apps.6154.14206278105493874.8db44c32-48c8-48c1-b448-4ca54a6e60e5.ed6f1827-3f78-4b18-b0f7-42a44532bcbb?q=90&w=480&h=270"
//                                 className="img-fluid rounded-start" alt="hangman"/>
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h5 className="card-title">Hangman</h5>
//                                 <p className="card-text">Un "hangman" ("ahorcado") simple. Armado completamente en
//                                     Python 3 a
//                                     modo de práctica personal.</p>
//                             </div>
//                             <div className="github-link"><a href="https://github.com/MattSalva/hangman" target="_blank"><i
//                                 className="bi bi-github"></i></a></div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="card mb-3" style={{maxWidth: '540px'}}>
//                     <div className="row g-0">
//                         <div className="col-md-4">
//                             <img
//                                 src="https://as1.ftcdn.net/v2/jpg/02/21/84/70/1000_F_221847002_CJJhicL6pXVfVidGFuLmudBaZIWqPlaR.jpg"
//                                 className="img-fluid rounded-start" alt="..."/>
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h5 className="card-title">Py-Memorygame</h5>
//                                 <p className="card-text">Un memory game realizado con Python 3 a modo de práctica para
//                                     poder
//                                     simular partidas del conocido juego de memoria, utilizando una base de datos de
//                                     flashcards y un script simple para iterar sobre las mismas </p>
//                             </div>
//                             <div className="github-link"><a href="https://github.com/MattSalva/py-memorygame"
//                                                             target="_blank"><i
//                                 className="bi bi-github"></i></a></div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="card mb-3" style={{maxWidth: '540px'}}>
//                     <div className="row g-0">
//                         <div className="col-md-4">
//                             <img
//                                 src="https://assets-global.website-files.com/61559d56514fd6c31beea3ac/632c3fcc4fe9212bedd12908_632c1987a910e3924d2421bf_iStock-531236924.webp"
//                                 className="img-fluid rounded-start" alt="..."/>
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h5 className="card-title">Py-Banking</h5>
//                                 <p className="card-text">Aplicación diseñada con Python 3 que simula el funcionamiento
//                                     de una
//                                     entidad bancaria para la creación y utilización de tarjetas de crédito. Utilizando
//                                     los
//                                     números de las mismas para identificar su validez.</p>
//                             </div>
//                             <div className="github-link"><a href="https://github.com/MattSalva/py_banking"><i
//                                 className="bi bi-github"></i></a></div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="card mb-3" style={{maxWidth: '540px'}}>
//                     <div className="row g-0">
//                         <div className="col-md-4">
//                             <img
//                                 src="https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_159262919-min-640x514.jpg"
//                                 className="img-fluid rounded-start" alt="..."/>
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h5 className="card-title">Py-Browser</h5>
//                                 <p className="card-text">Una aplicación hecha con Python 3 que simula la funcionalidad
//                                     de un
//                                     navegador web. Aplicación sin interfaz que guarda las páginas, permite ingresar URLs
//                                     y
//                                     navegar hacia delante y atrás en las páginas.</p>
//                             </div>
//                             <div className="github-link"><a href="https://github.com/MattSalva/py-browser"><i
//                                 className="bi bi-github"></i></a></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </main>
//     )
// }
//
// export default ProjectsPage
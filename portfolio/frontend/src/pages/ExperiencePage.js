import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ExperienceItem from "../components/experience/ExperienceItem";


const ExperiencePage = (props) => {
    const [loading, setLoading] = useState(false);
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        const cargarExperience = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/experience');
            setExperience(response.data);
            setLoading(false);
        };

        cargarExperience();
    }, []);

    return (
        <div className="accordion" id="accordionPanelsStayOpenExample">
            {loading ? (<p>Loading...</p>) : (
                experience.map(item => <ExperienceItem key={item.id}
                                                       id={item.id}
                                                       title={item.title}
                                                     description={item.description}
                                                     start_date={new Date(item.start_date).getFullYear()}
                                                     end_date={new Date(item.end_date).getFullYear()}
                                                     body={item.body}/>))}
        </div>

    );
}

export default ExperiencePage

// const ExperiencePage = (props) => {
//     return(<main>
//         <div className="accordion" id="accordionPanelsStayOpenExample">
//             <div className="accordion-item">
//                 <h2 className="accordion-header" id="panelsStayOpen-headingOne">
//                     <button className="accordion-button" type="button" data-bs-toggle="collapse"
//                             data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
//                             aria-controls="panelsStayOpen-collapseOne">
//                         InvGate - Soporte Técnico Nivel 2 (2019 - Actualidad)
//                     </button>
//                 </h2>
//                 <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
//                      aria-labelledby="panelsStayOpen-headingOne">
//                     <div className="accordion-body">
//                         <strong>Descripción:</strong> A cargo de la resolución de incidencias y cumplimiento de pedidos
//                         de
//                         servicios escalados desde el nivel 1 de soporte. Así como también a cargo de llevar a cabo
//                         tareas
//                         relacionadas a clientes muy importantes de la empresa. Con acceso al repositorio de código de
//                         las
//                         aplicaciones a las cuales se les da soporte, para interpretar el código PHP que compone a las
//                         aplicaciones y rastrear la raíz de inconvenientes. Además, acceso a base de datos SQL para
//                         la creación de consultas.
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion-item">
//                 <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
//                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                             data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
//                             aria-controls="panelsStayOpen-collapseTwo">
//                         Avaya - Help Desk Specialist (2017 - 2019)
//                     </button>
//                 </h2>
//                 <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
//                      aria-labelledby="panelsStayOpen-headingTwo">
//                     <div className="accordion-body">
//                         <strong>Descripción:</strong> Atención y solución de inconvenientes de usuarios internos de la
//                         empresa tanto por teléfono como por chat. Los análisis eran de índole superficial y apegándose a
//                         un
//                         proceso de resolución y, en todo caso, escalación a equipos correspondientes ya sea
//                         especialistas de
//                         las herramientas o equipos de campo para inconvenientes con los dispositivos de los usuarios.
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion-item">
//                 <h2 className="accordion-header" id="panelsStayOpen-headingThree">
//                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                             data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
//                             aria-controls="panelsStayOpen-collapseThree">
//                         Atento - Soporte Técnico Lexmark (2016 - 2017)
//                     </button>
//                 </h2>
//                 <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
//                      aria-labelledby="panelsStayOpen-headingThree">
//                     <div className="accordion-body">
//                         <strong>Descripción:</strong> Resolución de incidentes relacionados a impresoras Lexmark
//                         mediante
//                         atención telefónica. Los usuarios eran clientes finales o bien técnicos en el área que
//                         precisaban
//                         obtener información precisa de los manuales de los equipos los cuales usábamos como guía para la
//                         solución de incidencias.
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </main>)
// }


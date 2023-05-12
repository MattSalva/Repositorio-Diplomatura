import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EducationItem from "../components/education/EducationItem";

const EducationPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const cargarEducation = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/education');
            setEducation(response.data);
            setLoading(false);
        };

        cargarEducation();
    }, []);

    return (
        <div className="accordion" id="accordionPanelsStayOpenExample">
                        {loading ? (<p>Loading...</p>) : (
                            education.map(item => <EducationItem key={item.id} title={item.title}
                                                                 description={item.description}
                                                                 start_date={new Date(item.start_date).getFullYear()}
                                                                 end_date={new Date(item.end_date).getFullYear()}
                                                                 type={item.type}
                                                                 body={item.body}/>))}
        </div>

    );
}

export default EducationPage;

//     return(<main>
//     <div className="accordion" id="accordionPanelsStayOpenExample">
//         <div className="accordion-item">
//             <h2 className="accordion-header" id="panelsStayOpen-headingOne">
//                 <button className="accordion-button" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
//                         aria-controls="panelsStayOpen-collapseOne">
//                     Educación Universitaria
//                 </button>
//             </h2>
//             <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
//                  aria-labelledby="panelsStayOpen-headingOne">
//                 <div className="accordion-body">
//                     <dl>
//                         <dt>
//                             Universidad Técnologica Nacional - Regional Buenos Aires (2020 - Actualidad)
//                         </dt>
//                         <dd>
//                             Estudiante de la carrera Ingeniería en Sistemas de Información
//                         </dd>
//                     </dl>
//                 </div>
//             </div>
//         </div>
//         <div className="accordion-item">
//             <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
//                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
//                         aria-controls="panelsStayOpen-collapseTwo">
//                     Educación Terciaria
//                 </button>
//             </h2>
//             <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
//                  aria-labelledby="panelsStayOpen-headingTwo">
//                 <div className="accordion-body">
//                     <dl>
//                         <dt>
//                             Instituto Superior de Formación Docente y Técnica 42 "Leopoldo Marechal" (2015 - 2019)
//                         </dt>
//                         <dd>
//                             Graduado como profesor de Inglés en todos los niveles de la educación primaria y
//                             secundaria.
//                         </dd>
//                     </dl>
//                 </div>
//             </div>
//         </div>
//         <div className="accordion-item">
//             <h2 className="accordion-header" id="panelsStayOpen-headingThree">
//                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
//                         aria-controls="panelsStayOpen-collapseThree">
//                     Educación Secundaria
//                 </button>
//             </h2>
//             <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
//                  aria-labelledby="panelsStayOpen-headingThree">
//                 <div className="accordion-body">
//                     <dl>
//                         <dt>
//                             Escuela de Educación Secundaria Técnica N°2 de José C. Paz (2010 - 2014)
//                         </dt>
//                         <dd>
//                             Graduado con el título Técnico en Electrónica
//                         </dd>
//                     </dl>
//                 </div>
//             </div>
//         </div>
//     </div>
// </main>)
// }

//export default EducationPage
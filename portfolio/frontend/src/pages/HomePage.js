import {useState} from "react";
import axios from "axios";

const HomePage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contact', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
            setFormData(initialForm);
        }
    }

    return (
        <main>
            <div className="container">
                <div className="row d-flex flex-column align-center">
            <section>
                <br></br>
                <div className="col">
                    <h2>Un poco sobre mi... </h2>
                </div>
                    <br></br>
                    <br></br>
                <div className="col about">
                    <p className="">Soy Mathias y tengo 26 años. Trabajo hace mas de 6 años en el area de IT
                        dando soporte a diferentes aplicaciones. Soy profesor de inglés recibido y estudiante de la
                        carrera Ingenieria en Sistemas de Información de la UTN Regional Buenos Aires. Hace variós años
                        estudio por mi cuenta herramientas, metodologias, paradigmas y tecnologias relacionadas al
                        desarrollo de software por lo que ya cuento con experiencia en varios lenguajes como C++, Php,
                        Java, Python, Javascript y SQL. Así como tambien he realizado varios proyectos usando
                        controladores de versión como Git y Mercurial, haciendo uso de frameworks varios de cada
                        lenguaje como Flask y Django para Python, SpringBoot para Java, Laravel para PHP. Mi objetivo
                        profesional apunta a convertirme en un desarrollador Fullstack orientado a PHP y React, pero con
                        conocimientos en varios frameworks tales como Express.JS, React Native y Angular. </p>
                </div>
                <br/>
                <br/>
            </section>
            <h2>Contactarme</h2>
            <form method="post" action="/contact" onSubmit={handleSubmit}>
                <div><label htmlFor="nombre">Nombre</label></div>
                <div>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </div>
                <div><label htmlFor="email">Email</label></div>
                <div>

                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </div>
                <div><label htmlFor="telefono">Telefono</label></div>
                <div>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </div>
                <div><label htmlFor="mensaje">Mensaje</label></div>
                <div>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </div>
                <input type="submit" value="Enviar"/>

            </form>

            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
                </div>
            </div>
        </main>
    )
}

export default HomePage
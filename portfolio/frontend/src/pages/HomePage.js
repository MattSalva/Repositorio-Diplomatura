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
            <section>
                <div className="ctr">
                    <h4>About me</h4>
                    <p>Me llamo Mathias Salva, tengo 26 años y vivo en José C. Paz, Buenos Aires. Soy un profesor de
                        inglés
                        recibido y un estudiante de ingeniería en sistemas, y desde hace varios años he trabajado como
                        soporte
                        técnico en diferentes empresas. Hace años comencé a interesarme por la programación y hoy día es
                        una
                        afición la cual apunto a prácticar profesionalmente. Es uno de mis hobbies, al igual que la
                        actividad
                        física como natación o ir al gimnasio. Además, disfruto jugar videos juegos en línea, los cuáles
                        me
                        conectan a diario con amistades a la distancia.</p>
                </div>
            </section>
            <h2>Contactarme</h2>
            <form method="post" action="/contact" onSubmit={handleSubmit}>
                <div>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </div>
                <div>
                    <label for="telefono">Telefono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </div>
                <div>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </div>
                <input type="submit" value="Enviar"/>

            </form>

            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}

        </main>
    )
}

export default HomePage
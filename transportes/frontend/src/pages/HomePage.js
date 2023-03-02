import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="Avion"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, et id. Ad dolores eos facere
                        id impedit, incidunt laudantium nam praesentium quasi qui quia voluptatem. A aliquid atque enim
                        explicabo tempora tempore totam. Debitis, dolores inventore libero minima omnis quaerat
                        reiciendis rem. Aperiam commodi dolor dolore doloremque ea eius eveniet excepturi iure iusto
                        labore magnam minus omnis porro possimus quam vel, voluptate! Ad alias, blanditiis corporis cum
                        debitis earum est eum facere fuga fugiat impedit in ipsum laborum molestiae mollitia nam nisi
                        obcaecati porro quae quaerat quidem rerum sequi soluta temporibus tenetur vitae voluptate. Amet
                        assumenda eius ipsum magni placeat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius expedita fuga inventore molestiae
                        natus necessitatibus obcaecati praesentium quis. Architecto at exercitationem impedit iusto
                        provident quibusdam repellat veniam voluptates! Eos eum ex nihil numquam pariatur voluptate.
                        Accusamus exercitationem minima quas quasi voluptatibus? Accusantium commodi culpa eveniet
                        molestias quia sed. Consequuntur, minima.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
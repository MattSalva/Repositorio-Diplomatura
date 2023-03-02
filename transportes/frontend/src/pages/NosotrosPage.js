import React from 'react';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dolores, doloribus eos
                    itaque modi obcaecati odit quas quia sint? Aut autem blanditiis doloribus, incidunt odit officia
                    recusandae tempore voluptate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda blanditiis
                    consequuntur corporis cupiditate eaque exercitationem ipsa ipsum iste iure neque nesciunt, quasi,
                    quibusdam quisquam quos reiciendis soluta temporibus voluptatem.</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="images/nosotros/nosotros1.jpg" alt="Juan Gomez"/>
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum debitis distinctio dolor
                            iure iusto laudantium officia officiis. Aperiam deserunt eaque enim explicabo facilis id
                            mollitia non nostrum perferendis praesentium quasi, quia quibusdam quisquam quo ratione,
                            repellat saepe, ullam ut?</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;
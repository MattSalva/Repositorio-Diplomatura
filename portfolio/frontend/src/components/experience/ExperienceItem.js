import React from 'react';

const ExperienceItem = (props) => {
    const {key, id, title, description, start_date, end_date, body} = props;

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={'panelsStayOpen-heading' + String(id)}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target={'#panelsStayOpen-collapse'+ String(id)} aria-expanded="false"
                        aria-controls={'panelsStayOpen-collapse'+ String(id)}>
                    {title} ({start_date} - {end_date != '1969' ? end_date : 'Actualidad'})
                    </button>
                    </h2>
                    <div id={'panelsStayOpen-collapse'+ String(id)} className="accordion-collapse collapsed collapse"
                    aria-labelledby={'panelsStayOpen-heading' + String(id)}>
                    <div className="accordion-body">
                {description}
                    </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: body}} />
        </div>
    );
}

export default ExperienceItem;
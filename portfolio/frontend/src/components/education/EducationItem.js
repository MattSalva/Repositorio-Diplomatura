import React from 'react';

const EducationItem = (props) => {
    const {title, description, start_date, end_date, type, body} = props;

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={type === 3 ? 'panelStayOpen-headingOne' : type === 2 ? 'panelStayOpen-headingTwo' : 'panelStayOpen-headingThree'} >
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target={type === 3 ? '#panelStayOpen-collapseOne' : type === 2 ? '#panelStayOpen-collapseTwo' : '#panelStayOpen-collapseThree'} aria-expanded="true"
                        aria-controls={type === 3 ? 'panelStayOpen-collapseOne' : type === 2 ? 'panelStayOpen-collapseTwo' : 'panelStayOpen-collapseThree'}>
                    {type === 3 ? 'Educación Universitaria' : type === 2 ? 'Educación Terciaria' : 'Educación Secundaria'}
                </button>
            </h2>
            <div id={type === 3 ? 'panelStayOpen-collapseOne' : type === 2 ? 'panelStayOpen-collapseTwo' : 'panelStayOpen-collapseThree'} className="accordion-collapse collapse collapsed"
                 aria-labelledby={type === 3 ? 'panelStayOpen-headingOne' : type === 2 ? 'panelStayOpen-headingTwo' : 'panelStayOpen-headingThree'}>
                <div className="accordion-body">
                    <div>
                    <dl>
                        <dt>
                            <p>{title} ({start_date} - {end_date != '1969' ? end_date : 'Actualidad'})</p>
                        </dt>
                        <dd>
                            <p>{description}</p>
                        </dd>

                    </dl>
                    </div>
                </div>
            </div>
    <div dangerouslySetInnerHTML={{ __html: body}} />
    </div>
);
}
export default EducationItem;
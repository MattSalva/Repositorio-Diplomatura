import React from 'react';

const ProjectsItem = (props) => {
    const {title, description, image, body, repository, site} = props;

    return (
        <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                {image ? ( <img src={image} className="img-fluid rounded-start"/>) : (<img src="../img/projects/noimage.jpg" className="img-fluid rounded-start" alt="sin imagen"/> )}
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        </div>
                    <div className="github-link">
                        <a href={repository}><i className="bi bi-github"></i></a>

                        {site ? <a href={site}>  <i className="bi bi-globe-americas"></i></a> : null }
                    </div>
                </div>

      </div>
            <div dangerouslySetInnerHTML={{ __html: body}} /></div>


    );
}

export default ProjectsItem;
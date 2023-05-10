import React from 'react';

const ProjectsItem = (props) => {
    const {title, description, image, body, repository, site} = props;

    return (
        <div className="card mb-3" style={{maxWidth: 540}}>
            <div className="row g-0">
                <div className="col-md-4">
                {image ? ( <img src={image}/>) : (<img src="/images/projects/noimage.jpg"/> )}
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        </div>
                </div>
                <div className="github-link">
                    <i className="bi bi-github"><a href={repository}></a></i>
                    {site ? <i className="bi bi-globe-americas"><a href={site}></a></i> : null }
                </div>
      </div>
            <div dangerouslySetInnerHTML={{ __html: body}} /></div>


    );
}

export default ProjectsItem;
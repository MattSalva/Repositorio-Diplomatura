import React from 'react';

const ProjectsItem = (props) => {
    const {title, description, image, start_date, end_date, body} = props;

    return (
      <div className="projects">
          <h1>{title}</h1>
          <h2>{description}</h2>
          <h4>{start_date}</h4>
          <h4>{end_date}</h4>
          <img src={image}/>
          <div dangerouslySetInnerHTML={{ __html: body}} />
          <hr/>
      </div>
    );
}

export default ProjectsItem;
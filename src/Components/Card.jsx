import React from 'react'

function Card(props) {
  return (
    <div className="card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img
          src={props.imgUrl}
          className="img-fluid"
        />
        <a href="#!">
          <div className="mask card-custom-bg"></div>
        </a>
      </div>
      <div className="card-body">
        <h4 className="card-title mt-3">{props.name}</h4>
        <code className='mb-3'>
          <i className='fab fa-react'></i> ReactJS
          +&nbsp;
          <i className='fab fa-python'></i> Python
        </code>
        <p className="card-text mt-3">
          A pixel perfect {props.name} clone built using ReactJS &amp; Firebase.
        </p>
        <a href={props.url} target='_ublank' rel='noopener noreferrer' className="btn btn-warning btn-sm">Live Preview</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href={props.githubUrl} target='_ublank' rel='noopener noreferrer' className="btn btn-light btn-sm"><i className='fab fa-github'></i> GitHub</a>
      </div>
    </div>
  )
}

export default Card
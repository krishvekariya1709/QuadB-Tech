import React from "react";

export default function Carditems(props) {
  return (
    <div className="my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name : {props.name}</h5>
          <p className="card-text">
            Type : {props.type} </p><p>Status : {props.status}</p>
          <p className="card-text"> Language : {props.language}
          </p>
          <p className="card-text"> Genres : {props.genres}
          </p>
          <p className="card-text"> {props.Summary} 
          </p>
          <a href={props.url} className="btn btn-dark" target="_blank" rel="noreferrer">
            View more
          </a>
        </div>
      </div>
    </div>
  );
}

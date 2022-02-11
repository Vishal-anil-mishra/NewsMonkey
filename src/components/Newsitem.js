import React, { Component } from "react";

function Newsitem(props) {
  let { title, description, imgurl, newsurl, author, date, source, tagcolor } =
    props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <span
          className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${tagcolor}`}
        >
          {source}
        </span>
        <img src={imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <small className="text-muted">
              <b>Author</b> : {author} on
              {new Date(date).toGMTString()}
            </small>
          </p>

          <p className="card-text">{description}</p>
          <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Newsitem;

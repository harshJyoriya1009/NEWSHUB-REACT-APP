import React, { Component } from "react";

export class NewsItem extends Component {


  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="Sports news" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-sm btn-primary">
           Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

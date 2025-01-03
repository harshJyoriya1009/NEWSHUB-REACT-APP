import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem;" }}>
          <img
            src="https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/2c12/live/db121a50-c92e-11ef-87df-d575b9a434a4.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LRQ5T2TNUNAFLGVHT5STSHF4S4_size-normalized.jpg&w=1440":imageUrl} className="card-img-top" alt="Sports news" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{!description?"Yo Yo honey singer and i am the best in this world tthank you so much for loving me":description}</p>
            <a href={newsUrl} target="_blank"  rel="noopener noreferrer" className="btn btn-sm btn-primary">
           Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-4">
        <div className="card" style={{ width: "18rem" }}>
        {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>{source}</span> */}
          <img src={!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LRQ5T2TNUNAFLGVHT5STSHF4S4_size-normalized.jpg&w=1440":imageUrl} className="card-img-top" alt="Sports news" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted"><strong> By {!author?"unknown":author} on {new Date(date).toGMTString()} </strong></small></p>
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

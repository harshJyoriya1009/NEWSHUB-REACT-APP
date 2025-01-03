import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h1>Today Headlines</h1>
        <div className="row">

            <div className="col-md-4">
        <NewsItem title="News 1" description="desc" imageUrl="https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/2c12/live/db121a50-c92e-11ef-87df-d575b9a434a4.jpg"/>
            </div>

            <div className="col-md-4">
        <NewsItem title="News 1" description="desc"/>
            </div>

            <div className="col-md-4">
        <NewsItem title="News 1" description="desc"/>
            </div>
        </div>
      
      </div>
    )
  }
}

export default News;



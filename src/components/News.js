import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  article =  [
    {
      "source": {
        "id": "news-com-au",
        "name": "News.com.au"
      },
      "author": null,
      "title": "Debutant’s parents go viral with request",
      "description": "Beau Webster’s parents have won over the hearts of cricket fans with a wholesome request posted to social media.",
      "url": "https://www.news.com.au/sport/cricket/beau-websters-parents-go-viral-with-last-minute-facebook-request/news-story/d11f2aa5ccf8f34f3f5dc2aaf7ae4fda",
      "urlToImage": "https://content.api.news/v3/images/bin/3a4b8154d13e79017e9c0d1537f572b8",
      "publishedAt": "2025-01-02T18:29:00Z",
      "content": "Beau Webster’s parents have won over the hearts of cricket fans with a wholesome request posted to social media.\r\nWebster was named to make his debut for the New Year’s Test with Mitch Marsh axed fro… [+3841 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
    
  constructor(){
    super();
    // console.log("Hello my name is Harsh Jyoriya")
    this.state={
      article: this.article,
      loading: false
      
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>Today Headlines</h1>
        <div className="row">

        {this.state.article.map((element)=>{
          return  <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
        })}
          
        </div>
      </div>
    )
  }
}

export default News;



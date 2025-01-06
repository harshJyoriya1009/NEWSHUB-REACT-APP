import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

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
    this.state={
      article: [],
      loading: false,
      page: 1
      
    }
  }
   async componentDidMount(){
     let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3393ef06047a4a6e9c2709be629cdcc8&page=1&pageSize=${this.props.pageSize}`;
     this.setState({loading:true})
     let data = await fetch(url)
     let parseData= await data.json()
    this.setState({ article: parseData.articles, totalResults: parseData.totalResults, loading:false }); 
  }

  goToPrevious=async()=>{
    // console.log("Previous")
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3393ef06047a4a6e9c2709be629cdcc8&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url)
    let parseData= await data.json()
 

    this.setState({
      page: this.state.page -1,
      article: parseData.articles,
      loading:false
    })
  }

  goToNext= async()=>{
    // console.log("Next")
    if(!(this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize))){
    

    
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3393ef06047a4a6e9c2709be629cdcc8&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url)
    let parseData= await data.json()
 

    this.setState({
      page: this.state.page +1,
      article: parseData.articles,
      loading:false
    })
  }
  
  }

  render() {

    return (
      <div className='container my-3'>
        <h1 className='text-center'>Today Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">

        {!this.state.loading && this.state.article.map((element)=>{
          return  <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
        })}
           
        </div>

        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.goToPrevious}>&larr; Previous</button>
        <button disabled={this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-danger" onClick={this.goToNext}>Next &rarr;</button>
        </div>
      
      </div>
    )
  }
}

export default News;



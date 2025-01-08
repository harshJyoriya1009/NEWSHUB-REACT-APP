import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps={
    country: "us",
    pageSize: 5,
    category: 'science'
  }

  static propType={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

    
  constructor(){
    super();
    this.state={
      article: [],
      loading: false,
      page: 1
      
    }
  }
   async componentDidMount(){
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3393ef06047a4a6e9c2709be629cdcc8&page=1&pageSize=${this.props.pageSize}`;
     this.setState({loading:true})
     let data = await fetch(url)
     let parseData= await data.json()
    this.setState({ article: parseData.articles, totalResults: parseData.totalResults, loading:false }); 
  }

  goToPrevious=async()=>{
    // console.log("Previous")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3393ef06047a4a6e9c2709be629cdcc8&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
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
    

    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3393ef06047a4a6e9c2709be629cdcc8&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
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
          <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}  source={element.source.name}/>
              </div>
        })}
           
        </div>

        <div className="container d-flex justify-content-between" >
        <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.goToPrevious}>&larr; Previous</button>
        <button disabled={this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-danger" onClick={this.goToNext}>Next &rarr;</button>
        </div>
      
      </div>
    )
  }
}

export default News;



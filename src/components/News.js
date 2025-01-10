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

   capitalizeFirstLetter=(val)=> {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

  constructor(props){
    super(props);
    this.state={
      article: [],
      loading: false,
      page: 1  
    }
      document.title= `NewHub -${this.capitalizeFirstLetter(this.props.category)}`;
  }

  async pageUpdate(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3393ef06047a4a6e9c2709be629cdcc8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url)
    let parseData= await data.json()

   this.setState({ article: parseData.articles,
      totalResults: parseData.totalResults,
       loading:false
      }); 

  }

  // Fetch converting-----------------------------------------------------------------------------------------
   async componentDidMount(){
    this.pageUpdate();
  }

  // Previous button--------------------------------------------------------------------------------------
  goToPrevious=async()=>{
    // console.log("Previous")
    this.setState({
      page: this.state.page-1
    })
    this.pageUpdate();
    
  }
  
  // Next button--------------------------------------------------------------------------------------
  goToNext= async()=>{
    // console.log("Next")
  this.setState({
    page: this.state.page+1
  })
  this.pageUpdate();
  
  }

  render() {

    return (
      <div className='container my-3'>
        <h1 className='text-center'>Today Headlines on {this.capitalizeFirstLetter(this.props.category)} </h1>
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



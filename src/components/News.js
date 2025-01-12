import React,{useEffect, useState} from 'react'
// import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=>{
        const [article, setArticle] = useState([])                                         // export class News extends Component {
        const [loading, setLoading] = useState(true)                                                                           
        const [page, setPage] = useState(1)                                               // static defaultProps={             ---Used in class based component
        const [totalResults, setTotalResults] = useState(0)                               //   country: "us",
        // document.title= `NewHub -${this.capitalizeFirstLetter(this.props.category)}`;     //   pageSize: 5,
                                                                                          //   category: 'science'
                                                                                          // }
                                                                                    
                                                                                          // static propType={
                                                                                          //   country: PropTypes.string,
                                                                                          //   pageSize: PropTypes.number,
                                                                                          //   category: PropTypes.string
                                                                                          // }

  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  // constructor(props){
    // super(props);
    // this.state={
    //   article: [],
    //   loading: false,
    //   page: 1 ,
    //   totalResults:0
    // }
      // document.title= `NewHub -${this.capitalizeFirstLetter(this.props.category)}`;
  // }

  // async pageUpdate(){
  //   this.props.setProgress(10);
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3393ef06047a4a6e9c2709be629cdcc8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true})
  //   let data = await fetch(url)
  //   this.props.setProgress(30);
  //   let parseData= await data.json()
  //   this.props.setProgress(70);
    
  //   this.setState({ article: parseData.articles,
  //     totalResults: parseData.totalResults,
  //     loading:false,
  //   }); 
  //   this.props.setProgress(100);

  const pageUpdate=async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=06397fa1da2a4f3eaffaaea05e62261d&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(30);
    let parseData= await data.json()
    props.setProgress(70);
    setArticle(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);

  }

  // Fetch converting-----------------------------------------------------------------------------------------
  useEffect(() => {                              //  async componentDidMount(){
    pageUpdate();                                //   this.pageUpdate();
     //eslint-disable-next-line                  
  }, [])                                         // }
                                                 
                                                 
  

  // Previous button--------------------------------------------------------------------------------------
  // goToPrevious=async()=>{
  //   console.log("Previous")
  //   this.setState({
  //     page: this.state.page-1
  //   })
  //   this.pageUpdate();
  // }
  
  // Next button--------------------------------------------------------------------------------------
  // goToNext= async()=>{
  //   console.log("Next")
  // this.setState({
  //   page: this.state.page+1
  // })
  // this.pageUpdate();
  // }

  // fetchMoreData= async()=>{
  //   this.setState({page: this.state.page+1 })
  //   this.setState({ loading: true });
    
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3393ef06047a4a6e9c2709be629cdcc8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url)
  //   let parseData= await data.json()

  //  this.setState({ 
  //      article: this.state.article.concat(parseData.articles),
  //     totalResults: parseData.totalResults,
  //     loading: false,
  //     }); 
  // }
  
 const fetchMoreData= async()=>{
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=06397fa1da2a4f3eaffaaea05e62261d&page=${page+1}&pageSize=${props.pageSize}`;
   setPage(page+1)
    let data = await fetch(url)
    let parseData= await data.json()
    setArticle(article.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
  }

  // render() {

    return (
      <>
      <div className='container' style={{marginTop:'65px'}}>
        <h1 className='text-center'>Today Headlines on {capitalizeFirstLetter(props.category)} </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
    dataLength={article.length}
    next={fetchMoreData}
    hasMore={article.length !== totalResults}
    loader={ <Spinner/>}
    
  >

    <div className="container">
        <div className="row">

        { article.map((element)=>{
          return  <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}  source={element.source.name}/>
              </div>
        })}
        </div>
        </div>

        {/* <div className="container d-flex justify-content-between" >
        <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.goToPrevious}>&larr; Previous</button>
        <button disabled={this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-danger" onClick={this.goToNext}>Next &rarr;</button>
        </div> */}
        
      </InfiniteScroll>
      </div>
      </>
    )
  // }    --Render closing tag
}


//Making class based component into function based component
News.defaultProps={
  country: "us",
  pageSize: 5,
  category: 'science'
}

News.propType={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News;


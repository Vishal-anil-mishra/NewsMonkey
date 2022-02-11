import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


function News(props) {
  const [article, setarticle] = useState([])
  const [page, setpage] = useState(0)
  const [totalresults, settotalresults] = useState(0)
  const [loading, setloading] = useState(true)
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updatenews= async()=> {
    props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=60a12289af144d598bbe43947d36c1a7&page=${page}&pagesize=${props.pagesize}`;
    setloading( true );
    let data = await fetch(url);
    props.setprogress(30);
    let parseddata = await data.json();
    props.setprogress(70);
    console.log(parseddata);
    setarticle(parseddata.articles);
    settotalresults(parseddata.totalResults);
    setloading(false);
    
    props.setprogress(100);
  }
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(
      props.category
    )}-NewsMonkey`;
    updatenews();
  }, [])
  
  
  // }
  // handleprevclick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   this.props.country
  //   // }&category=${
  //   //   this.props.category
  //   // }&apiKey=60a12289af144d598bbe43947d36c1a7=${
  //   //   this.state.page - 1
  //   // }&pagesize=${this.props.pagesize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);

  //   // let parseddata = await data.json();
  //   // console.log(parseddata);
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updatenews();
  // };
  // handlenextclick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   this.props.country
  //   // }&category=${
  //   //   this.props.category
  //   // }&apiKey=60a12289af144d598bbe43947d36c1a7=${
  //   //   this.state.page + 1
  //   // }&pagesize=${this.props.pagesize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);

  //   // let parseddata = await data.json();
  //   // console.log(parseddata);
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updatenews();
  // };
  const fetchNextnews = async () => {
    setpage(
      page + 1
    );
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=60a12289af144d598bbe43947d36c1a7&page=${page}&pagesize=${props.pagesize}`;

    let data = await fetch(url);

    let parseddata = await data.json();
    console.log(parseddata);
    setarticle(article.concat(parseddata.articles));
    
  };
  
    return (
      <div className="container my-3">
        <h2 className="text-center">{`Top headlines from : ${capitalizeFirstLetter(
          props.category
        )}`}</h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={article.length}
          next={fetchNextnews}
          hasMore={article.length !== totalresults}
          loader={<h4>Loading...</h4>}
        >
          <div className="row">
            {article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 15) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imgurl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://images.hindustantimes.com/img/2022/02/04/1600x900/Breaking-News-Live-Blog-pic_1626307942790_1643933127366.jpg"
                    }
                    newsurl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                    tagcolor={props.tagcolor}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        <div className="d-flex justify-content-between">
          {/* <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handleprevclick}
          >
            &larr; Previous
          </button> */}
          {/* <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalresults / this.props.pagesize)
            }
            className="btn btn-dark"
            onClick={this.handlenextclick}
          >
            Next &rarr;
          </button> */}
        </div>
      </div>
    );
  
}

export default News;

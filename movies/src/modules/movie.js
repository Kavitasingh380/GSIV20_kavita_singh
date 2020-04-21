import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import Header from "../components/header/profileHeader";
import { isUserAlreadyLoggedIn } from "../generic/index";
import Home from "../assets/home-run.svg"
import Details from "./details"

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      pageNo: 1,
      maxPage: 0,
      movieData: [],
      details: {},
      openDetails: false

    };
  }

  componentDidMount() {
    let payload = {
      pageNo: 1

    }
    this.props.upcomingMovieRequest(payload)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.movie.upcomingMovie.isSuccess) {
      this.setState({
        movieData: nextProps.movie.upcomingMovie.data.results,
        pageNo: nextProps.movie.upcomingMovie.data.page,
        maxPage: nextProps.movie.upcomingMovie.data.total_pages
      })


    } else if (nextProps.movie.upcomingMovie.isError) {
      this.setState({
        movieData: [],
        pageNo: 0,
        maxPage: 0

      })
    }
    if (nextProps.movie.movieDetail.isSuccess) {
      this.setState({
        details: nextProps.movie.movieDetail.data

      },()=>{

      this.props.history.push({
        pathname: '/details',
        state: nextProps.movie.movieDetail.data,
      })
      })
      this.props.movieDetailClear()
    }

  }
  page(e) {
    if (e.target.id == "prev") {
      if (this.state.pageNo == "" || this.state.pageNo == undefined || this.state.pageNo == 1) {

      } else {

        this.setState({

          pageNo: this.props.movie.upcomingMovie.data.page,

          maxPage: this.props.movie.upcomingMovie.data.total_pages,
        })
        if (this.props.movie.upcomingMovie.data.page != 0) {
          let data = {

            pageNo: this.props.movie.upcomingMovie.data.page - 1,

          }
          this.props.upcomingMovieRequest(data);
        }
      }
    } else if (e.target.id == "next") {
      this.setState({
        pageNo: this.props.movie.upcomingMovie.data.page,

        maxPage: this.props.movie.upcomingMovie.data.total_pages,
      })
      if (this.props.movie.upcomingMovie.data.page != this.props.movie.upcomingMovie.data.maxPage) {
        let data = {

          pageNo: this.props.movie.upcomingMovie.data.page + 1,

        }
        this.props.upcomingMovieRequest(data);
      }
    }
    else if (e.target.id == "first") {
      console.log(":")
      this.setState({
        pageNo: this.props.movie.upcomingMovie.data.page,

        maxPage: this.props.movie.upcomingMovie.data.total_pages,
      })
      if (this.props.movie.upcomingMovie.data.page <= this.props.movie.upcomingMovie.data.maxPage) {
        let data = {

          pageNo: 1,

        }
        this.props.upcomingMovieRequest(data);
      }


    }
  }
  onClear() {
    this.setState({
      search: ""
    })

  }
  displayDetails(id) {
    let payload = {
      movieId: id
    }
    this.props.movieDetailRequest(payload)

  }
  onClose() {
    this.setState({
      openDetails: false
    })
  }

  render() {
    console.log(this.state.movieData)
    const { movieData, search } = this.state;
    var result = movieData.length != 0 ? _.filter(movieData, function (data) {
      return _.startsWith(data.title.toLowerCase(), search.toLowerCase());
    }) : [];
    return (
      <div className="login-view container-fluid">
        <Header />

        <div className="row">
          <div className="col-sm-12">

            <div className="col-sm-8">
              <input type="search" className="title" value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} placeholder="Search..." />
            </div>
            <div className="col-sm-1" >
              <button type="button" className="btn-primary abc" onClick={(e) => this.onClear(e)}>Clear</button>


            </div>
            <div className="col-sm-2" />
            <div className="col-sm-1" >
              <img src={Home} width="30" className="m-top-20" />

            </div>

          </div>
        </div>
        <div className="row ">
          {result.length != 0 ? result.map((data, key) => (
            <div className="col-sm-3 col-md-3 m-top-20" key={key} onClick={(e) => this.displayDetails(data.id)}>
              <div className="movie-list">
                <div className="upper-part">

                </div>

                <div className="lower-part m-top-5">
                  <span>
                    {data.title}
                  </span>
                  <span>
                    ({data.vote_average})
                  </span>
                  <br />
                  <span className="m-top-20">
                    {data.release_date}
                  </span>

                </div>

              </div>





            </div>
          )) : null}


        </div>
        <div className="row">
          <div className="pagerDiv">
            <ul className="list-inline pagination">
              <li>
                <button className={this.state.pageNo == 1 || this.state.pageNo == undefined || this.state.pageNo == "" ? "PageFirstBtn pointerNone" : "PageFirstBtn"} onClick={(e) => this.page(e)} id="first" >
                  First
                                        </button>
              </li>

              <li>
                <button className={this.state.pageNo - 1 != 0 && this.state.pageNo - 1 != "" && this.state.pageNo != 1 && this.state.pageNo != undefined ? "PageFirstBtn" : " PageFirstBtn pointerNone"} onClick={(e) => this.page(e)} id="prev">
                  Prev
                  </button>
              </li>

              {/* {this.state.prev != 0 ? <li >
                                    <button className="PageFirstBtn" onClick={(e) => this.page(e)} id="prev">
                                        Prev
                  </button>
                                </li> : <li >
                                        <button className="PageFirstBtn" disabled>
                                            Prev
                  </button>
                                    </li>} */}
              <li>
                <button className="PageFirstBtn pointerNone">
                  <span>{this.state.pageNo}/{this.state.maxPage}</span>
                </button>
              </li>
              {this.state.pageNo != undefined && this.state.pageNo != "" && this.state.pageNo != this.state.maxPage ? <li >
                <button className="PageFirstBtn borderNone" onClick={(e) => this.page(e)} id="next">
                  Next
                  </button>
              </li> : <li >
                  <button className="PageFirstBtn borderNone" disabled>
                    Next
                  </button>
                </li>}


              {/* {this.state.prev != 0 ? <li onClick={(e) => this.page(e)} id="prev">{this.state.prev}</li> : <li />}
                <li onClick={(e) => this.page(e)} style={{ background: "blue", color: "white" }} id="pageNo">{this.state.pageNo}</li>
                {this.state.next - 1 != this.state.maxPage ? <li onClick={(e) => this.page(e)} id="next">{this.state.next}</li> : <li />} */}
            </ul>
          </div>

        </div>
        {/*{this.state.openDetails? <Details {...this.state} onClose={(e)=>this.onClose(e)}/>:null}*/}
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    movie: state.movie,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

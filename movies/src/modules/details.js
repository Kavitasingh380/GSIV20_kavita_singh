import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import Header from "../components/header/profileHeader";
import { isUserAlreadyLoggedIn } from "../generic/index";
import Home from "../assets/home-run.svg"

class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          

        }


    }
    // componentDidMount(){
    //     this.setState({
    //         details:this.props.location.state
    //     })
    // }


    render() {
        console.log(this.props)
        let details = this.props.location.state

        return (

            <div className="login-view container-fluid">
                <Header />

                <div className="row m-top-20">
                    <div className="col-sm-12">

                        <div className="col-sm-3 pad-0">
                            <div className="left-part">
                        </div>
                        </div>
                        <div className="col-sm-9 pad-0">
                            <div className="right-part">
                                <span>{details.title}</span> <span className="shaded">({details.vote_average})</span>
                                <br/>
                                 <span className="shaded">{details.status}</span>
                                 <br/>
                                 <span className="shaded">Description:{details.overview}</span>



                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Details
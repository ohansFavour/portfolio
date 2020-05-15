import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import Flip from "react-reveal/Flip"
// import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen">{/* <LoaderLogo id="logo" /> */}
      <Flip  left duration={4000}  ><h1 className="loading-name">Favour Ohanekwu</h1></Flip>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? <Redirect to="/home" /> : <AnimatedSplash />;
  }
}

export default Splash;

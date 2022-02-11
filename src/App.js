import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export class App extends Component {
  pagesize = 15
  state={
    progress : 0
  }
  setProgress = (progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          
          <LoadingBar
            color="#f11946"
            progress={this.state.setProgress}
           
          />
        
          <Routes>
            <Route
              exact
              path="/"
              element={<News setprogress={this.setProgress} key="general" key="general" pagesize={this.pagesize} country="in" category="general" tagcolor = "primary" />}
            />
            <Route
              exact
              path="/sports"
              element={<News setprogress={this.setProgress} key="sports" pagesize={this.pagesize} country="in" category="sports" tagcolor = "secondary"/>}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setprogress={this.setProgress} key="entertainmen" pagesize={this.pagesize} country="in" category="entertainment" tagcolor = "success"/>
              }
            />
            <Route
              exact
              path="/business"
              element={<News setprogress={this.setProgress} key="business" pagesize={this.pagesize} country="in" category="business" tagcolor = "info"/>}
            />
            <Route
              exact
              path="/health"
              element={<News setprogress={this.setProgress} key="health" pagesize={this.pagesize} country="in" category="health" tagcolor = "danger"/>}
            />
            <Route
              exact
              path="/science"
              element={<News setprogress={this.setProgress} key="science" pagesize={this.pagesize} country="in" category="science" tagcolor = "warning"/>}
            />
            <Route
              exact
              path="/technology"
              element={<News setprogress={this.setProgress} key="technology" pagesize={this.pagesize} country="in" category="technology" tagcolor = "dark"/>}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

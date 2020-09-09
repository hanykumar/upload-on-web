import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "",
    };
  }

  // Use API
  // fetch('_____api____').then(
  //  .....
  // );

  submitHandler(e) {
    e.preventDefault();

    //  Do whatever you want to do with => this.state.file
    console.log(this.state.file);

    //deleting previous image
    this.setState({
      file: "",
      imagePreviewUrl: "",
    });
  }

  imageChangeHandler(e) {
    e.preventDefault();
    let reader = new FileReader();
    // First file = (e.target.files[0])
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }
  deletehandler(e) {
    this.setState({
      file: "",
      imagePreviewUrl: "",
    });
  }

  render() {
    return (
      <div className="bg-dark">
        {/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="#">
            Web Upload
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Content */}
        <div className="container">
          <div className="row align-items-center" style={{ height: "100vh" }}>
            <div className="col"></div>
            <div className="col-4 text-center">
              <form onSubmit={this.submitHandler.bind(this)}>
                <div className="p-3 text-white">
                  <h4>Upload file</h4>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="fileItem"
                    onChange={this.imageChangeHandler.bind(this)}
                  />
                  <label className="custom-file-label" for="fileItem">
                    Choose file
                  </label>
                </div>
                <div className="p-3 text-white">
                  <button
                    type="submit"
                    className="btn btn-success mx-2"
                    onClick={this.submitHandler.bind(this)}
                    disabled={!this.state.imagePreviewUrl}
                  >
                    Upload now
                  </button>
                  {this.state.imagePreviewUrl ? (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={this.deletehandler.bind(this)}
                    >
                      Delete
                    </button>
                  ) : null}
                </div>
              </form>
            </div>
            <div className="col align-items-center">
              {this.state.imagePreviewUrl ? (
                <img src={this.state.imagePreviewUrl} width="200" />
              ) : (
                <p className="text-light">Image Preview here!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

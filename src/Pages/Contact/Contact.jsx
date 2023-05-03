import { Component } from "react";
import avatar from "./logo512.png";
import "./Contact.css"
class Contact extends Component {
  state = {};
  render() {
    return (
      <>
        <p id="head" className="text-center">Contact</p>
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-4">
              <div className="container">
                <h3>Employee 1</h3>
                <img src={avatar} alt="" style={{ width: "50%" }} />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="container">
                <h3> Employee 2</h3>
                <img src={avatar} alt="" style={{ width: "50%" }} />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="container">
                <h3> Employee 3</h3>
                <img src={avatar} alt="" style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;

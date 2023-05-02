import { Component } from "react";

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <hr />
            <div className="container">
                <section className="row text-center">
                    <div className="col-sm">Home</div>
                    <div className="col-sm">Products</div>
                    <div className="col-sm">Contact</div>
                    <div className="col-sm">Social media</div>
                </section>
          </div>
            </>
        );
    }
}
 
export default Footer;
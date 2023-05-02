import { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand" href="#">
              SARAN
            </a>
            <button
              class="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
              <ul class="navbar-nav me-auto mt-2 mt-lg-0 text-center fs-6">
                <Link to="/">
                  <li class="nav-item">
                    <a class="nav-link active" href="#" aria-current="page">
                      Home <span class="visually-hidden">(current)</span>
                    </a>
                  </li>
                </Link>
                <Link to="/products">
                  <li class="nav-item">
                    <a class="nav-link" href="#a">
                      Products
                    </a>
                  </li>
                </Link>
                <Link to="/about">
                  <li class="nav-item">
                    <a class="nav-link" href="#a">
                      About us
                    </a>
                  </li>
                </Link>
                <Link to="/contact">
                  <li class="nav-item">
                    <a class="nav-link" href="#a">
                      Contact
                    </a>
                  </li>
                </Link>
                <Link to="/social-media">
                  <li class="nav-item">
                    <a class="nav-link" href="#a">
                      Social media
                    </a>
                  </li>
                </Link>
              </ul>
              <form class="d-flex my-2 my-lg-0">
                <input
                  class="form-control me-sm-1 m-1"
                  type="text"
                  placeholder="Search"
                />
                <button
                  class="btn btn-outline-light my-1 my-sm-1"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

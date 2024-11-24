import { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbarstyles.css";
import { Menuitems } from "./Menuitems";
class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="Navbaritems">
        <h1 className="navbar-logo">Explorify</h1>
        <div className="menu-icons" onClick={this.handleclick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "Nav-menu active" : "Nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i>
                    <i className={item.icon}></i>
                  </i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>signup</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;

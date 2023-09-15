import "./Navstyle.css"
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component{
    /* if false bars will show if true times*/
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>
                 {/* bars and times onClick  using for loop ternary statement */}
                <div className="menu-icons" onClick= {this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

                </div>
                <ul className= {this.state.clicked ? "nav-menu active" : "nav-menu "} >
                    {/* this is an array which will be mapped to menuitems 
                      item refers to home service etc and index refers to the ranking */}
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                            <Link className={item.cName} to={item.url}> <i className={item.icon}>
                            </i> 
                            {item.title}
                            </Link>
                            </li>
                        );
                    }
                        ) }
                   <button>Sign Up</button> 

                </ul>
            </nav>
        );

    }
}

export default Navbar;
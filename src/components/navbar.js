import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import {Router} from "react-router"

class NavBar extends Component {
    render() {
        return (
            <div className="flex sticky bg-green-400">
               <ul className="inline-flex m-6" >
                 <li className="pr-3 hover:bg-green-800 p-4 hover:rounded">Home</li>
                 <li className="pr-3 hover:bg-green-800 p-4 hover:rounded">Home</li>
                 <li className="pr-3 hover:bg-green-800 p-4 hover:rounded">Home</li>
                 <li className="pr-3 hover:bg-green-800 p-4 hover:rounded">Home</li>
               </ul>
            </div>
        );
    }
}

export default NavBar;
import React from "react";

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


export default class DropdownMenu extends React.Component {
    render() {

        return (


            <div className="navbar">
                <div className="dropdown">
                    <button className="dropbtn" onClick={myFunction}>
                        <i className="fa fa-user"></i>
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content" id="myDropdown">
                        <a href="#">Night Mode</a>
                        <a href="#">Login/Sign up</a>
                        <a href="#">Premium Version</a>
                        <a href="#">RK Coins</a>
                        <a href="#">Help Center</a>
                    </div>
                </div>
            </div>
        );
    }
};


import React, { Component } from 'react';
import './style.css';

class Navbar extends Component {


    render(){
        return(
            
            <div className="mainNav">
                <form className="searchForm" action="">
                    <input className="inputText" type="text"/>
                    <input className="buttonValid" type="submit"/>
                </form>
            </div>    
        );
    }
}

export default Navbar;
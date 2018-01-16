import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {switchAuth} from '../actions';

const Nav = props =>{

    const navStyle={
        padding: '0 8px'
    }

    function renderBtn(){
        if(props.auth){
           return <button onClick={()=>props.switchAuth(false)} className="btn orange">Sign Out</button>
        }
        return <button onClick={()=>props.switchAuth(true)} className="btn green">Sign In</button>
 
    }

    return(
        <nav style={navStyle}>
        <div className="nav-wrapper">
            <Link to="/" className="brand-logo">The User App
            </Link>
            <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/secret-list">Secret List</Link></li>
                <li><Link to="/protected-stuff">Protected Stuff</Link></li>
                <li>{renderBtn()}</li>
            </ul>
        </div>
      </nav>
    );
}


function  mapStateToProps(state) {
    return{
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {switchAuth})(Nav);
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavContext } from '../App';

function HeaderNav() {
    const navContext = useContext(NavContext);
	return (
        <header className="headernav is-hidden-tablet">
            <div className="headernav__menu" onClick={() => navContext.dispatch({type: 'toggleNav'})}>
                <span className="icon">
                    <i className="fas fa-bars fa-lg" />
                </span>
            </div>
            <div className="headernav__brand">
                <Link to="/">
                    <h1 className="title is-5">CSS Generator</h1>
                </Link>
            </div>
        </header>
	);
}

export default HeaderNav;
import React from 'react';
import './Css/Nav.scss';

function Nav() {
    return (
        <nav className="leftnav">
            <div className="leftnav__brand">
                <h1 className="title is-4">CSS Builder</h1>
                <h3 className="subtitle is-6">by zinglecode</h3>
            </div>
            <div className="leftnav__group">
                <h5 className="title is-6">Background</h5>
                <a>Background Color</a>
                <a>Background Gradient</a>
                <a>Background Image</a>
            </div>
            <div className="leftnav__group">
                <h5 className="title is-6">Border</h5>
                <a className="current">Border</a>
                <a>Border Radius</a>
            </div>
        </nav>
    );
}

export default Nav;
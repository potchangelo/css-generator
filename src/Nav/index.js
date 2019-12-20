import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Css/Nav.scss';

function Nav() {
    return (
        <nav className="leftnav">
            <div className="leftnav__brand">
                <h1 className="title is-4">
                    <Link className="has-text-black-bis" to="/">CSS Builder</Link>
                </h1>
                <h3 className="subtitle is-6">by zinglecode</h3>
            </div>
            <div className="leftnav__group">
                <h5 className="title is-6">Background</h5>
                <NavLink to="background-color">Background Color</NavLink>
                <NavLink to="background-image">Background Image</NavLink>
            </div>
            <div className="leftnav__group">
                <h5 className="title is-6">Border</h5>
                <NavLink to="border">Border</NavLink>
                <NavLink to="border-radius">Border Radius</NavLink>
            </div>
            <div className="leftnav__group">
                <h5 className="title is-6">Filter</h5>
                <NavLink to="filter-blur">Blur</NavLink>
                <NavLink to="filter-brightness">Brightness</NavLink>
                <NavLink to="filter-contrast">Contrast</NavLink>
                <NavLink to="filter-grayscale">Grayscale</NavLink>
                <NavLink to="filter-hue-rotate">Hue-Rotate</NavLink>
                <NavLink to="filter-invert">Invert</NavLink>
                <NavLink to="filter-saturate">Saturate</NavLink>
                <NavLink to="filter-sepia">Sepia</NavLink>
            </div>
            <div className="leftnav__group">
                <h5 className="title is-6">Shadow</h5>
                <NavLink to="box-shadow">Box Shadow</NavLink>
                <NavLink to="text-shadow">Text Shadow</NavLink>
            </div>
            <div className="leftnav__group">
                <h5 className="title is-6">Text</h5>
                <NavLink to="text">Text</NavLink>
            </div>
        </nav>
    );
}

export default Nav;
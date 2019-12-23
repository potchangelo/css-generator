import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Css/Nav.scss';

function Nav() {
    return (
        <nav className="leftnav">
            <Link className="leftnav__brand" to="/">
                <h1 className="title is-5">CSS Builder</h1>
                <h3 className="subtitle is-7">by zinglecode</h3>
            </Link>
            <div className="leftnav__group">
                <h5 className="title is-6">Background</h5>
                <NavLink to="background-color">Background Color</NavLink>
                <NavLink to="background-image">Background Image</NavLink>
            </div>
            <div className="leftnav__group">
                <h5 className="title is-6">Border</h5>
                <NavLink to="border">Border</NavLink>
                <NavLink to="border-radius">Border Radius</NavLink>
                <NavLink to="box-shadow">Box Shadow</NavLink>
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
                <h5 className="title is-6">Text</h5>
                <NavLink to="text">Text</NavLink>
                <NavLink to="text-shadow">Text Shadow</NavLink>
            </div>
            <div className="leftnav__group">
                <h5 className="title is-6">Transform</h5>
                <NavLink to="transform-translate">Translate</NavLink>
                <NavLink to="transform-rotate">Rotate</NavLink>
                <NavLink to="transform-scale">Scale</NavLink>
                <NavLink to="transform-skew">Skew</NavLink>
            </div>
        </nav>
    );
}

export default Nav;
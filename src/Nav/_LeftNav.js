import React, { useContext, useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { NavContext } from '../App';
import Logo from '../Images/Logo.svg';

function LeftNav(props) {
    const { location } = props;
    const navContext = useContext(NavContext);

    useEffect(() => {
        navContext.dispatch({type: 'closeNav'});
    }, [location]);

    let navClass = 'leftnav';
    if (navContext.isNavOpenMobile === false) navClass += ' is-hidden-mobile';

    return (
        <nav className={navClass}>
            <Link className="leftnav__brand" to="/">
                <h1 className="title is-5">CSS Builder</h1>
                <h3 className="subtitle is-7">by Zinglecode</h3>
                <img className="leftnav__logo" src={Logo} alt="zinglecode" />
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

export default withRouter(LeftNav);
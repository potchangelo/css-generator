import React, { useContext, useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { NavContext } from '.';
import { menuGroupArray } from '../Helper';
import Logo from '../Image/Logo64.png';

function LeftNav(props) {
    // Props, Context
    const { location } = props;
    const { isNavOpenMobile, dispatch } = useContext(NavContext);

    // Effects
    useEffect(() => {
        dispatch({type: 'closeNav'});
    }, [location, dispatch]);

    // Elements
    const groupElements = menuGroupArray.map(group => {
        const linkElements = group.linkArray.map(link => {
            return (
                <NavLink key={link.url} to={link.url}>{link.title}</NavLink>
            );
        })
        return (
            <div key={group.name} className="leftnav__group">
                <h5 className="title is-6">{group.name}</h5>
                {linkElements}
            </div>
        );
    });
    let navClass = 'leftnav';
    if (!isNavOpenMobile) navClass += ' is-hidden-mobile';

    return (
        <nav className={navClass}>
            <Link className="leftnav__brand" to="/">
                <h1 className="title is-5">CSS Generator</h1>
                <h3 className="subtitle is-7">by Zinglecode</h3>
                <img className="leftnav__logo" src={Logo} alt="zinglecode" />
            </Link>
            {groupElements}
        </nav>
    );
}

export default withRouter(LeftNav);
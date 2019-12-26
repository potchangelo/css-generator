import React, { useContext, useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { NavContext } from '../App';
import { menuGroupsArray } from '../Helpers';
import Logo from '../Images/Logo.svg';

function LeftNav(props) {
    // Props, Context
    const { location } = props;
    const navContext = useContext(NavContext);

    // Effects
    useEffect(() => {
        navContext.dispatch({type: 'closeNav'});
    }, [location]);

    // Elements
    const groupsElements = menuGroupsArray.map(group => {
        const linksElements = group.links.map(link => {
            return (
                <NavLink key={link[0]} to={link[0]}>{link[1]}</NavLink>
            );
        })
        return (
            <div key={group.name} className="leftnav__group">
                <h5 className="title is-6">{group.name}</h5>
                {linksElements}
            </div>
        );
    });
    let navClass = 'leftnav';
    if (navContext.isNavOpenMobile === false) navClass += ' is-hidden-mobile';

    return (
        <nav className={navClass}>
            <Link className="leftnav__brand" to="/">
                <h1 className="title is-5">CSS Builder</h1>
                <h3 className="subtitle is-7">by Zinglecode</h3>
                <img className="leftnav__logo" src={Logo} alt="zinglecode" />
            </Link>
            {groupsElements}
        </nav>
    );
}

export default withRouter(LeftNav);
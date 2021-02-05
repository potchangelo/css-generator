import React, { useContext } from 'react';
import styles from './css/appNav.module.scss';
import { NavContext } from './_AppNav';

function AppNavDimmer() {
    const navContext = useContext(NavContext)
    if (!navContext.isNavOpenMobile) return null;
    return (
        <div
            className={`${styles.dimmer} is-hidden-tablet`}
            role="button"
            aria-label="Close navigation"
            tabIndex="0"
            onClick={_ => navContext.dispatch({ type: 'closeNav' })}
        />
    );
}

export default AppNavDimmer;
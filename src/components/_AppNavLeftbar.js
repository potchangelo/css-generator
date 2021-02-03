import React, { useContext } from 'react';
import styles from './css/appNav.module.scss';
import Logo64 from '../images/logo-64.png';
import { NavContext } from './_AppNav';

function AppNavLeftbar() {
    // - Context
    const { isNavOpenMobile } = useContext(NavContext);

    // - Attributes
    let leftbarClass = styles.leftbar;
    if (!isNavOpenMobile) leftbarClass += ' is-hidden-mobile';

    return (
        <nav className={leftbarClass}>
            <a className={styles.leftbarBrand}>
                <h1 className="title is-5">CSS Generator</h1>
                <h3 className="subtitle is-7">by Zinglecode</h3>
                <img className={styles.leftbarLogo} src={Logo64} alt="zinglecode" />
            </a>
        </nav>
    );
}

export default AppNavLeftbar;
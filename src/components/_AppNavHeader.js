import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Menu } from 'react-feather';
import * as styles from './css/appNav.module.scss';
import { NavContext } from './_AppNav';

function AppNavHeader() {
    const navContext = useContext(NavContext);
    return (
        <header className={`${styles.header} is-hidden-tablet`}>
            <div
                className={styles.headerMenu}
                onClick={_ => navContext.dispatch({ type: 'toggleNav' })}
            >
                <span className="icon">
                    <Menu strokeWidth={2.5} />
                </span>
            </div>
            <div className={styles.headerBrand}>
                <Link to="/">
                    <h1 className="title is-5">CSS Generator</h1>
                </Link>
            </div>
        </header>
    );
}

export default AppNavHeader;
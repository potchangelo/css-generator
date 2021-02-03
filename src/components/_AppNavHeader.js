import React, { useContext } from 'react';
import styles from './css/appNav.module.scss';
import { NavContext } from './_AppNav';

function AppNavHeader() {
    const navContext = useContext(NavContext);
	return (
        <header className={`${styles.header} is-hidden-tablet`}>
            <div className={styles.headerMenu} onClick={_ => navContext.dispatch({type: 'toggleNav'})}>
                <span className="icon">
                    <i className="fas fa-bars fa-lg" />
                </span>
            </div>
            <div className={styles.headerBrand}>
                <a>
                    <h1 className="title is-5">CSS Generator</h1>
                </a>
            </div>
        </header>
	);
}

export default AppNavHeader;
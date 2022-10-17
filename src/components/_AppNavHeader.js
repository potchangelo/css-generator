import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { Menu } from 'react-feather';
import { _NavContext as NavContext } from './_AppNav';
import * as styles from './css/appNav.module.scss';

function _AppNavHeader() {
  const { dispatch } = useContext(NavContext);
  return (
    <header className={`${styles.header} is-hidden-tablet`}>
      <div
        className={styles.headerMenu}
        role="button"
        tabIndex={0}
        onClick={_ => dispatch({ type: 'toggleNav' })}
        onKeyPress={_ => {}}
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

export default _AppNavHeader;

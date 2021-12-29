import React, { useContext } from 'react';
import { Link } from 'gatsby';
import * as styles from './css/appNav.module.scss';
import Logo64 from '../images/logo-64.png';
import { NavContext } from './_AppNav';
import { menuGroupArray } from '../helpers';

function AppNavLeftbar() {
  // - Ref, Context
  const { isNavOpenMobile } = useContext(NavContext);

  // - Attributes
  let leftbarClass = styles.leftbar;
  if (!isNavOpenMobile) leftbarClass += ' is-hidden-mobile';

  // - Elements
  const groupElements = menuGroupArray.map(group => {
    const linkElements = group.linkArray.map(link => (
      <Link
        key={link.url}
        to={`/${link.url}/`}
        activeClassName={styles.leftbarLinkActive}
      >
        {link.title}
      </Link>
    ));
    return (
      <div key={group.name} className={styles.leftbarGroup}>
        <h5 className="title is-6">{group.name}</h5>
        {linkElements}
      </div>
    );
  });

  return (
    <nav className={leftbarClass}>
      <Link className={styles.leftbarBrand} to="/">
        <h1 className="title is-5">CSS Generator</h1>
        <h3 className="subtitle is-7">by Zinglecode</h3>
        <img className={styles.leftbarLogo} src={Logo64} alt="zinglecode" />
      </Link>
      {groupElements}
    </nav>
  );
}

export default AppNavLeftbar;

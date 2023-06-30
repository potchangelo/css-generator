import { Link } from 'gatsby';
import React, { useContext } from 'react';
import Logo64 from 'z/images/logo-64.png';
import { menuGroups } from 'z/utils/data';
import { _NavContext as NavContext } from './_AppNav';
import * as styles from './css/appNav.module.scss';

function _AppNavLeftbar() {
  const { isNavOpenMobile } = useContext(NavContext);

  let leftbarClass = styles.leftbar;
  if (!isNavOpenMobile) leftbarClass += ' is-hidden-mobile';

  const groupElements = menuGroups.map(group => {
    const linkElements = group.links.map(link => (
      <Link key={link.url} to={`/${link.url}/`} activeClassName={styles.leftbarLinkActive}>
        {link.title}
      </Link>
    ));
    return (
      <div key={group.name} className={styles.leftbarGroup}>
        <h6 className="title is-6">{group.name}</h6>
        {linkElements}
      </div>
    );
  });

  return (
    <nav className={leftbarClass}>
      <Link className={styles.leftbarBrand} to="/">
        <div>
          <img className={styles.leftbarLogo} src={Logo64} alt="zinglecode" />
        </div>
        <div>
          <h1 className="title is-6">CSS Generator</h1>
          <h3 className="subtitle is-7">by Zinglecode</h3>
        </div>
      </Link>
      {groupElements}
      <p class="is-size-7 mb-4 mx-4">© Copyright 2023 Zinglecode.</p>
    </nav>
  );
}

export default _AppNavLeftbar;

import React, { useContext } from 'react';
import { _NavContext as NavContext } from './_AppNav';
import * as styles from './css/appNav.module.scss';

function _AppNavDimmer() {
  const { isNavOpenMobile, dispatch } = useContext(NavContext);
  if (!isNavOpenMobile) return null;
  return (
    <div
      className={`${styles.dimmer} is-hidden-tablet`}
      role="button"
      tabIndex={0}
      aria-label="Close navigation"
      onClick={_ => dispatch({ type: 'closeNav' })}
      onKeyPress={_ => {}}
    />
  );
}

export default _AppNavDimmer;

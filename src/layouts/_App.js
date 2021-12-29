import React from 'react';
import * as styles from './css/app.module.scss';
import { AppNav } from '../components';

const App = (props) => (
  <>
    <AppNav />
    <main className={styles.main}>{props.children}</main>
  </>
);

export default App;

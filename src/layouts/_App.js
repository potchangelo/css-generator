import React from 'react';
import styles from './css/app.module.scss';
import { AppNav } from '../components'

const App = (props) => (
    <div>
        <AppNav />
        <main className={styles.main}>
            {props.children}
        </main>
    </div>
);

export default App;
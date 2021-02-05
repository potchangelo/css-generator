import React from 'react';
import styles from './css/app.module.scss';
import { AppNav } from '../components'

function App(props) {
    return (
        <>
            <AppNav />
            <main className={styles.main}>
                {props.children}
            </main>
        </>
    );
}

export default App;
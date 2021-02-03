import React from 'react';
import { AppNav } from '../components'

function App(props) {
    return (
        <>
            <AppNav />
            {props.children}
        </>
    );
}

export default App;
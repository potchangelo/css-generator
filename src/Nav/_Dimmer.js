import React, { useContext } from 'react';
import { NavContext } from '.';

function Dimmer() {
    const navContext = useContext(NavContext)
    if (!navContext.isNavOpenMobile) return null;
    return (
        <div className="dimmer is-hidden-tablet" onClick={_ => navContext.dispatch({type: 'closeNav'})}></div>
    );
}

export default Dimmer;
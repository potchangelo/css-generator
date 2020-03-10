import React, { useContext } from 'react';
import { NavContext } from '../App';

function Dimmer() {
    const navContext = useContext(NavContext);

    let _class = 'dimmer is-hidden-tablet';
    if (navContext.isNavOpenMobile === false) _class += ' is-hidden-mobile';

    return (
        <div className={_class} onClick={_ => navContext.dispatch({type: 'closeNav'})}></div>
    );
}

export default Dimmer;
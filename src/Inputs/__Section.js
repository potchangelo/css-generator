import React from 'react';
import './Css/__Section.scss'

function Section(props) {
    return (
        <section className="main__section main__section--inputs">
            {props.children}
        </section>
    );
}

export default Section;
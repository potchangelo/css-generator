import React from 'react';
import './Css/__Section.scss'

function Section(props) {
    return (
        <section className="main__section main__section--inputs">
            <div className="section__title">{}</div>
            <div className="section__content">{props.children}</div>
        </section>
    );
}

export default Section;
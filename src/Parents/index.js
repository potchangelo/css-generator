import React from 'react';
import './Css/_Section.scss'

function MainSection(props) {
    const {extraClasses, title, subTitle, children} = props;

    let classes = 'main__section';
    if (extraClasses !== undefined) {
        classes += ` ${extraClasses}`;
    }

    return (
        <section className={classes}>
            <div className="section__block--title">
                <h5 className="title is-5">{title}</h5>
                <h6 class="subtitle is-7">{subTitle}</h6>
            </div>
            <div className="section__block--content">
                {children}
            </div>
        </section>
    );
}

export {MainSection};
import './Css/Layout.scss';
import React from 'react';

function MainSection(props) {
    const { extraClass, title, subTitle, children } = props;

    let sectionClass = 'main__section';
    if (!!extraClass) sectionClass += ` ${extraClass}`;

    return (
        <section className={sectionClass}>
            <div className="section__block-title">
                <h5 className="title is-5">{title}</h5>
                <h6 className="subtitle is-7">{subTitle}</h6>
            </div>
            <div className="section__block-content">
                {children}
            </div>
        </section>
    );
}

export { MainSection };
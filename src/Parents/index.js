import React from 'react';
import './Css/Parents.scss'

function MainSection(props) {
    const { extraClass, title, subTitle, children } = props;

    let _class = 'main__section';
    if (extraClass !== undefined) {
        _class += ` ${extraClass}`;
    }

    return (
        <section className={_class}>
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
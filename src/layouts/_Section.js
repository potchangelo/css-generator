import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/section.module.scss';

function Section(props) {
    const { extraClass, headerTheme, title, subTitle, children } = props;

    let headerClass = styles.header;
    if (headerTheme === 'dark') {
        headerClass += ` ${styles.headerDark}`;
    }

    return (
        <section className={extraClass ?? ''}>
            <div className={headerClass}>
                <h5 className="title is-5">{title}</h5>
                <h6 className="subtitle is-7">{subTitle}</h6>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
}

Section.propTypes = {
    extraClass: PropTypes.string,
    headerTheme: PropTypes.string,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

export default Section;
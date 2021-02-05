import React from 'react';
import styles from './css/block.module.scss';

function Block(props) {
    const { extraClass, title, subTitle, children } = props;

    let sectionClass = extraClass ?? '';

    return (
        <section className={sectionClass}>
            <div className={styles.title}>
                <h5 className="title is-5">{title}</h5>
                <h6 className="subtitle is-7">{subTitle}</h6>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
}

export default Block;
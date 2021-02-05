import React from 'react';
import { Link } from 'gatsby';
import styles from './css/dashboard.module.scss';
import { App, Block } from '../layouts';
import { menuGroupArray } from '../helpers';

function IndexPage() {
    const groupElements = menuGroupArray.map(group => {
        const linkElements = group.linkArray.map(link => (
            <div key={link.url} className="column is-6-mobile is-6-tablet is-4-desktop">
                <Link className={styles.link} to={link.url}>
                    <h3 className="title is-size-6-mobile is-size-5-tablet has-text-white">
                        {link.title}
                    </h3>
                </Link>
            </div>
        ));
        return (
            <div key={group.name} className={styles.group}>
                <h3 className="title is-size-4">{group.name}</h3>
                <div className="columns is-mobile is-multiline has-text-centered">
                    {linkElements}
                </div>
            </div>
        );
    });

    return (
        <App>
            <Block extraClass={styles.main} title="Dashboard" subTitle="Choose menu">
                {groupElements}
            </Block>
        </App>
    );
}

export default IndexPage;

import React from 'react';
import { Link } from 'gatsby';
import * as stylesSection from './css/section.module.scss';
import * as styles from './css/dashboard.module.scss';
import { SEO } from '../components';
import { App, Section } from '../layouts';
import { menuGroupArray } from '../helpers';

export default () => {
    const groupElements = menuGroupArray.map(group => {
        const linkElements = group.linkArray.map(link => (
            <div key={link.url} className="column is-6-mobile is-6-tablet is-4-desktop">
                <Link className={styles.link} to={`/${link.url}/`}>
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
            <SEO />
            <Section
                extraClass={stylesSection.dashboard}
                title="Dashboard"
                subTitle="Choose menu"
            >
                {groupElements}
            </Section>
        </App>
    );
};

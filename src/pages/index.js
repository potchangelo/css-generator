import { Link } from 'gatsby';
import React from 'react';
import { Seo } from 'z/components';
import { App, Section } from 'z/layouts';
import { menuGroupArray } from 'z/utils/data';
import * as styles from './css/dashboard.module.scss';

function PageIndex() {
  const groupElements = menuGroupArray.map(group => {
    const linkElements = group.linkArray.map(link => (
      <div key={link.url} className="column is-6-mobile is-6-tablet is-4-desktop">
        <Link className={styles.link} to={`/${link.url}/`}>
          <h3 className="title is-size-6-mobile is-size-5-tablet has-text-white">{link.title}</h3>
        </Link>
      </div>
    ));
    return (
      <div key={group.name} className="mb-6">
        <h3 className="title is-size-4">{group.name}</h3>
        <div className="columns is-mobile is-multiline has-text-centered">{linkElements}</div>
      </div>
    );
  });

  return (
    <App>
      <Seo />
      <Section extraClass={styles.section} title="Dashboard" subTitle="Choose menu">
        {groupElements}
      </Section>
    </App>
  );
}

export default PageIndex;

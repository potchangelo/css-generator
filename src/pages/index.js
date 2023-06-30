import { Link } from 'gatsby';
import React from 'react';
import { Seo } from 'z/components';
import { Section } from 'z/layouts';
import { menuGroups } from 'z/utils/data';
import * as styles from './css/dashboard.module.scss';

function PageIndex() {
  const groupElements = menuGroups.map(group => {
    const linkElements = group.links.map(link => (
      <div key={link.url} className="column is-6-mobile is-6-tablet is-4-desktop">
        <Link className={styles.link} to={`/${link.url}/`}>
          <h6 className="title is-size-6-mobile is-size-5-tablet has-text-white">{link.title}</h6>
        </Link>
      </div>
    ));
    return (
      <div key={group.name} className="mb-6">
        <h5 className="title is-size-5">{group.name}</h5>
        <div className="columns is-mobile is-multiline has-text-centered">{linkElements}</div>
      </div>
    );
  });

  return (
    <Section extraClass={styles.section} title="Dashboard" subTitle="Choose menu">
      {groupElements}
    </Section>
  );
}

export default PageIndex;

export const Head = () => <Seo />;

import React from 'react';
import { Link } from 'react-router-dom';
import { menuGroupArray } from '../Helpers';
import './Css/Dashboard.scss';
import { MainSection } from '../Parents';

function Dashboard() {
    const groupsElements = menuGroupArray.map(group => {
        const linksElements = group.links.map(link => {
            return (
                <div key={link[0]} className="column is-6-mobile is-6-tablet is-4-desktop">
                    <Link className="box has-background-link is-shadowless" to={link[0]}>
                        <h3 className="title is-size-6-mobile is-size-5-tablet has-text-white">{link[1]}</h3>
                    </Link>
                </div>
            );
        });
        return (
            <div key={group.name} className="dashboard__group">
                <h3 className="title is-size-4">{group.name}</h3>
                <div className="columns is-mobile is-multiline has-text-centered">
                    {linksElements}
                </div>
            </div>
        );
    });

    return (
        <MainSection extraClass="main__section-dashboard" title="Dashboard" subTitle="Choose menu">
            {groupsElements}
        </MainSection>
    );
}

export default Dashboard;
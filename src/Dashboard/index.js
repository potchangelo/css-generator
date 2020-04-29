import './Css/Dashboard.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { menuGroupArray } from '../Helper';
import { MainSection } from '../Layout';

function Dashboard() {
    const groupElements = menuGroupArray.map(group => {
        const linkElements = group.linkArray.map(link => {
            return (
                <div key={link.url} className="column is-6-mobile is-6-tablet is-4-desktop">
                    <Link className="box has-background-link is-shadowless" to={link.url}>
                        <h3 className="title is-size-6-mobile is-size-5-tablet has-text-white">{link.title}</h3>
                    </Link>
                </div>
            );
        });
        return (
            <div key={group.name} className="dashboard__group">
                <h3 className="title is-size-4">{group.name}</h3>
                <div className="columns is-mobile is-multiline has-text-centered">
                    {linkElements}
                </div>
            </div>
        );
    });

    return (
        <MainSection extraClass="main__section-dashboard" title="Dashboard" subTitle="Choose menu">
            {groupElements}
        </MainSection>
    );
}

export default Dashboard;
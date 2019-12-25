import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Dashboard.scss';

function Dashboard() {
    const groupsArray = [
        {
            name: 'Background',
            links: [
                ['background-color', 'Background Color'], ['backgorund-image', 'Background Image']
            ]
        },
        {
            name: 'Border',
            links: [
                ['border', 'Border'], ['border-radius', 'Border Radius'], ['box-shadow', 'Box Shadow']
            ]
        },
        {
            name: 'Filter',
            links: [
                ['filter-blur', 'Blur'], ['filter-brightness', 'Brightness'], 
                ['filter-contrast', 'Contrast'], ['filter-grayscale', 'Grayscale'],
                ['filter-hue-rotate', 'Hue-Rotate'], ['filter-invert', 'invert'],
                ['filter-saturate', 'Saturate'], ['filter-sepia', 'Sepia']
            ]
        },
        {
            name: 'Text',
            links: [
                ['text', 'Text'], ['text-shadow', 'Text Shadow']
            ]
        },
        {
            name: 'Transform',
            links: [
                ['transform-translate', 'Translate'], ['transform-rotate', 'Rotate'], 
                ['transform-scale', 'Scale'], ['transform-skew', 'Skew']
            ]
        }
    ]
    const groupsElements = groupsArray.map(group => {
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
        <section className="main__section main__section-dashboard">
            <div className="section__block--title">
                <h5 className="title is-5">Dashboard</h5>
                <h6 className="subtitle is-7">Choose menu</h6>
            </div>
            <div className="section__block--content">
                {groupsElements}
            </div>
        </section>
	);
}

export default Dashboard;
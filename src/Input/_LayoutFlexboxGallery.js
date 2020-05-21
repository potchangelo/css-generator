import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';
import { layoutGalleryHtml } from '../Helper';

function LayoutFlexboxGallery(props) {
    // Props ,States
    const { updateOutput } = props;
    const [height, setHeight] = useState(150);
    const [isScrollHidden, setIsScrollHidden] = useState(false);
    const [hSpace, setHSpace] = useState(20);
    const [vSpace, setVSpace] = useState(20);

    // Effects
    useEffect(() => {
        const overflowX = !!isScrollHidden ? 'hidden' : 'auto';

        const style = {
            layoutType: `flexbox-gallery`,
            containerStyle: {
                height: `${Number(height) + 15}px`,
                padding: `0px ${hSpace/2}px`,
                overflowX,
            },
            itemStyle: {
                height: `${height}px`,
                padding: `${vSpace}px ${hSpace/2}px`,
            }
        }

        const css = '' +
            `.gallery {\n` +
            `  display: flex;\n` +
            `  flex-direction: column;\n` +
            `  height: ${height};\n` +
            `  overflow-x: ${isScrollHidden};\n` +
            `  background-color: #dbdbdb;\n` +
            `}\n\n` + 
            `.item {\n` +
            `  padding: ${vSpace}px ${hSpace/2}px;\n` +
            `}`;

        updateOutput(style, css, layoutGalleryHtml);
    }, [updateOutput, height, isScrollHidden, hSpace, vSpace]);

    return (
        <MainSection extraClass="main__section-inputs" title="Flexbox Gallery Layout" subTitle="Customizing">
            <div className="inputs">
                <h5 className="title is-5">Container</h5>
                <label className="label">Height (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="80"
                            max="240"
                            value={height}
                            onChange={e => setHeight(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">80</div>
                            <div className="item has-text-grey">240</div>
                        </div>
                    </div>
                </div>
                <label className="checkbox checkbox__custom">
                    <input 
                        type="checkbox" 
                        checked={isScrollHidden}
                        onChange={e => setIsScrollHidden(e.target.checked)} />
                    <span className="icon checkbox__icon">
                        <i className="fas fa-check" />
                    </span>
                    <span className="checkbox__text">Hide scrollbar</span>
                </label>
                <h5 className="title is-5 has-margin-top">Item</h5>
                <label className="label">Horizontal space (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="40"
                            value={hSpace}
                            onChange={e => setHSpace(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">40</div>
                        </div>
                    </div>
                </div>
                <label className="label">Vertical space (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="40"
                            value={vSpace}
                            onChange={e => setVSpace(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">40</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default LayoutFlexboxGallery;
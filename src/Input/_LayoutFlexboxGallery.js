import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';
import { layoutGalleryHtml } from '../Helper';

function LayoutFlexboxGallery(props) {
    // Props ,States
    const { updateOutput } = props;
    const [height, setHeight] = useState(180);
    const [isScrollHidden, setIsScrollHidden] = useState(false);
    const [hSpace, setHSpace] = useState(16);
    const [vSpace, setVSpace] = useState(16);

    // Effects
    useEffect(() => {
        const scrollHeight = Number(height) + 15;

        const style = {
            layoutType: `flexbox-gallery`,
            wrapperStyle: {
                height: `${isScrollHidden ? height : scrollHeight}px`
            },
            scrollStyle: {
                height: `${scrollHeight}px`
            },
            containerStyle: {
                height: `${height}px`,
                padding: `0px ${hSpace/2}px`
            },
            itemStyle: {
                padding: `${vSpace}px ${hSpace/2}px`,
            }
        }

        const css = '' +
            `.gallery-wrapper {\n` +
            `  background-color: #dbdbdb;\n` +
            `  box-sizing: border-box;\n` + 
            `  height: ${isScrollHidden ? height : scrollHeight}px;\n` +
            `  overflow: hidden;\n` +
            `}\n\n` + 
            `.gallery-scroll {\n` +
            `  box-sizing: border-box;\n` + 
            `  height: ${scrollHeight}px;\n` +
            `  overflow-x: auto;\n` +
            `  overflow-y: hidden;\n` +
            `}\n\n` + 
            `.gallery {\n` +
            `  background-color: #dbdbdb;\n` +
            `  display: flex;\n` +
            `  box-sizing: border-box;\n` + 
            `  width: max-content;\n` +
            `  height: ${height}px;\n` +
            `  padding: 0px ${hSpace/2}px;\n` +
            `}\n\n` + 
            `.item {\n` +
            `  box-sizing: border-box;\n` + 
            `  height: 100%;\n` +
            `  padding: ${vSpace}px ${hSpace/2}px;\n` +
            `}\n\n` + 
            `.item img {\n` +
            `  display: block;\n` + 
            `  height: 100%;\n` + 
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
                            min="100"
                            max="240"
                            value={height}
                            onChange={e => setHeight(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">100</div>
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
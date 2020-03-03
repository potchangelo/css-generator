import React, { useState, useEffect, useRef } from 'react';
import { MainSection } from '../Parents';
import { hexToRgba } from '../Helpers';

const modeArray = [['linear', 'Linear'], ['radial', 'Radial']];
const linearDegArray = [90, 135, 180, 225, 270, 315, 0, 45];
const radialShapeArray = [['circle', 'Circle'], ['ellipse', 'Ellipse']]

function BackgroundGradient(props) {
    // Props, States, Ref
    const { updateOutput } = props;
    const [mode, setMode] = useState('linear');
    const [linearDeg, setLinearDeg] = useState(90);
    const [radialShape, setRadialShape] = useState('circle');

    const [colorArray, setColorArray] = useState([
        { color: '#1988f7', alpha: 1, position: 0, isSelected: true, isDragging: false },
        { color: '#f71988', alpha: 1, position: 100, isSelected: false, isDragging: false },
    ]);
    const handlesAreaRef = useRef(null);

    // Lifecycles
    useEffect(() => {
        window.addEventListener('mousemove', onMouseMoveHandle);
        window.addEventListener('mouseup', onMouseUpHandle);
        return () => {
            window.removeEventListener('mousemove', onMouseMoveHandle);
            window.removeEventListener('mouseup', onMouseUpHandle);
        }
    }, []);

    useEffect(() => {
        const colorPointStrings = [...colorArray].sort((item1, item2) => {
            return item1.position - item2.position;
        }).map((item) => {
            return `${hexToRgba(item.color, item.alpha)} ${item.position}%`;
        });

        let colorString = '';
        if (mode === 'linear') {
            colorString = `linear-gradient(${linearDeg}deg, ${colorPointStrings.join(', ')})`;
        }
        else if (mode === 'radial') {
            colorString = `radial-gradient(${radialShape}, ${colorPointStrings.join(', ')})`;
        }

        const style = { backgroundImage: colorString };
        const css = `background-image: ${colorString};`;
        updateOutput(style, css);
    }, [updateOutput, mode, linearDeg, radialShape, colorArray]);

    // Functions
    function onMouseDownHandle(index) {
        document.body.classList.add('is-unselectable');
        setColorArray(prev => prev.map((item, _index) => {
            if (_index === index) {
                item.isDragging = true;
                item.isSelected = true;
            }
            else item.isSelected = false;
            return item;
        }));
    }

    function onMouseMoveHandle(e) {
        if (!colorArray.some(item => item.isDragging)) return;

        const minX = handlesAreaRef.current.getBoundingClientRect().left;
        const maxX = handlesAreaRef.current.getBoundingClientRect().right;
        let moveX = e.clientX;
        if (moveX < minX) moveX = minX;
        else if (moveX > maxX) moveX = maxX;

        const percentX = Math.round((moveX - minX) / (maxX - minX) * 100);
        setColorArray(prev => prev.map(item => {
            if (item.isDragging) item.position = percentX;
            return item;
        }));
    }

    function onMouseUpHandle() {
        document.body.classList.remove('is-unselectable');
        setColorArray(prev => prev.map(item => {
            item.isDragging = false;
            return item;
        }));
    }

    function onClickHandlesArea(e) {
        //console.log(e.clientX);
    }

    function setPointColor(color) {
        setColorArray(prev => prev.map(item => {
            if (item.isSelected) item.color = color;
            return item;
        }));
    }

    function setPointAlpha(alpha) {
        setColorArray(prev => prev.map(item => {
            if (item.isSelected) item.alpha = alpha;
            return item;
        }));
    }

    // Elements
    const modeElements = modeArray.map(arr => {
        let classes = 'button';
        if (arr[0] === mode) classes += ' is-dark is-selected'
        return (
            <button
                key={arr[0]}
                className={classes}
                onClick={_ => setMode(arr[0])}>
                {arr[1]}
            </button>
        );
    });

    let linearElement = null, radialElement = null;
    if (mode === 'linear') {
        const linearDegElements = linearDegArray.map(deg => {
            let classes = 'button';
            if (deg === linearDeg) classes += ' is-dark is-selected';
            return (
                <button
                    key={deg}
                    className={classes}
                    onClick={_ => { if (deg !== linearDeg) setLinearDeg(deg) }}>
                    <span className="icon">
                        <i className="fas fa-arrow-up" data-fa-transform={`rotate-${deg}`}></i>
                    </span>
                </button>
            );
        });
        linearElement = (
            <>
                <div className="buttons has-addons">
                    {linearDegElements}
                </div>
            </>
        );
    }
    else if (mode === 'radial') {
        const radialShapeElements = radialShapeArray.map(arr => {
            let classes = 'button';
            if (arr[0] === radialShape) classes += ' is-dark is-selected'
            return (
                <button
                    key={arr[0]}
                    className={classes}
                    onClick={_ => { if (arr[0] !== radialShape) setRadialShape(arr[0]) }}>
                    {arr[1]}
                </button>
            );
        });
        radialElement = (
            <>
                <div className="buttons has-addons">
                    {radialShapeElements}
                </div>
            </>
        );
    }

    const gradientHandleElements = colorArray.map((item, index) => {
        let _class = 'gradient__handle';
        if (item.isSelected) _class += ' selected';
        const stylesArray = {
            backgroundColor: item.color,
            left: `${item.position}%`
        };
        return (
            <div key={index}
                className={_class}
                style={stylesArray}
                onMouseDown={_ => onMouseDownHandle(index)}
                onClick={e => e.stopPropagation()}>
                <span className="icon has-text-white has-background-black-bis">
                    <i className="fas fa-angle-down fa-lg"></i>
                </span>
            </div>
        );
    });

    const selectedColor = colorArray.find(item => item.isSelected);

    return (
        <MainSection extraClass="main__section-inputs" title="Background Gradient" subTitle="Customizing">
            <div className="inputs">
                <h5 className="title is-5">Style</h5>
                <div className="buttons has-addons">
                    {modeElements}
                </div>
                {linearElement}
                {radialElement}
                <h5 className="title has-margin-top is-5">Colors</h5>
                <label className="label">Gradient slider</label>
                <div className="field">
                    <div className="gradient__control">
                        <div className="gradient__bg"></div>
                        <div className="gradient__handles-area"
                            ref={handlesAreaRef}
                            onClick={onClickHandlesArea}>
                            {gradientHandleElements}
                        </div>
                    </div>
                    <div className="control__range--text">
                        <div className="item has-text-grey">0%</div>
                        <div className="item has-text-grey">100%</div>
                    </div>
                </div>
                <label className="label">Color</label>
                <div className="field has-addons">
                    <div className="control__color control">
                        <input
                            className="input"
                            type="color"
                            value={selectedColor.color}
                            onChange={e => setPointColor(e.target.value)} />
                    </div>
                    <div className="control is-expanded">
                        <input
                            className="input"
                            type="text"
                            placeholder="HEX Color"
                            pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                            value={selectedColor.color}
                            onChange={e => setPointColor(e.target.value)} />
                    </div>
                </div>
                <label className="label">Color opacity</label>
                <div className="field">
                    <div className="control__range control">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={selectedColor.alpha}
                            onChange={e => setPointAlpha(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">1</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default BackgroundGradient;
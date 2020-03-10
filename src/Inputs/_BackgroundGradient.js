import React, { useState, useEffect, useRef } from 'react';
import { MainSection } from '../Parents';
import { colorHexToRgba, gradientMiddleHex, gradientMiddleAlpha } from '../Helpers';

const modeArray = [
    {key: 'linear', title: 'Linear'},
    {key: 'radial', title: 'Radial'},
];
const linearDegArray = [90, 135, 180, 225, 270, 315, 0, 45];
const radialShapeArray = [
    {key: 'circle', title: 'Circle'},
    {key: 'ellipse', title: 'Ellipse'},
];

function BackgroundGradient(props) {
    // Props, States, Ref
    const { updateOutput } = props;
    const [mode, setMode] = useState('linear');
    const [linearDeg, setLinearDeg] = useState(90);
    const [radialShape, setRadialShape] = useState('circle');

    const [pointArray, setPointArray] = useState([
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
    }, [pointArray]);

    useEffect(() => {
        const pointTextArray = [...pointArray].sort((point1, point2) => {
            return point1.position - point2.position;
        }).map(point => {
            return `${colorHexToRgba(point.color, point.alpha)} ${point.position}%`;
        });

        let colorText = '';
        if (mode === 'linear') {
            colorText = `linear-gradient(${linearDeg}deg, ${pointTextArray.join(', ')})`;
        }
        else if (mode === 'radial') {
            colorText = `radial-gradient(${radialShape}, ${pointTextArray.join(', ')})`;
        }

        const style = { backgroundImage: colorText };
        const css = `background-image: ${colorText};`;
        updateOutput(style, css);
    }, [mode, linearDeg, radialShape, pointArray]);

    // Functions
    function onMouseDownHandle(index) {
        document.body.classList.add('is-unselectable');
        setPointArray(prevArray => prevArray.map((point, pIndex) => {
            if (pIndex === index) {
                point.isDragging = true;
                point.isSelected = true;
            }
            else point.isSelected = false;
            return point;
        }));
    }

    function onMouseMoveHandle(e) {
        if (!pointArray.some(point => point.isDragging)) return;

        let percentX = getHandlePointPercent(e.clientX);
        if (percentX < 0) percentX = 0;
        else if (percentX > 100) percentX = 100;

        setPointArray(prevArray => prevArray.map(point => {
            if (point.isDragging) point.position = percentX;
            return point;
        }));
    }

    function onMouseUpHandle() {
        document.body.classList.remove('is-unselectable');
        setPointArray(prevArray => prevArray.map(point => {
            point.isDragging = false;
            return point;
        }));
    }

    function onClickHandlesArea(e) {
        const percentX = getHandlePointPercent(e.clientX);

        // Left right points
        const colorLeftObj = [...pointArray].sort((point1, point2) => {
            return point2.position - point1.position;
        }).find(point => point.position < percentX);
        const colorRightObj = [...pointArray].sort((point1, point2) => {
            return point1.position - point2.position;
        }).find(point => point.position > percentX);

        // Color, alpha
        let colorMid, alphaMid;
        if (colorLeftObj === undefined) {
            colorMid = colorRightObj.color;
            alphaMid = colorRightObj.alpha;
        }
        else if (colorRightObj === undefined) {
            colorMid = colorLeftObj.color;
            alphaMid = colorLeftObj.alpha;
        }
        else {
            const {
                color: colorLeft,
                position: percentLeft,
                alpha: alphaLeft } = colorLeftObj;
            const {
                color: colorRight,
                position: percentRight,
                alpha: alphaRight } = colorRightObj;
            const ratio = (percentX - percentLeft) / (percentRight - percentLeft);
            colorMid = gradientMiddleHex(colorLeft, colorRight, ratio);
            alphaMid = gradientMiddleAlpha(alphaLeft, alphaRight, ratio);
        }

        const pointObj = {
            color: colorMid, alpha: alphaMid, position: percentX, isSelected: true, isDragging: false
        }
        setPointArray(prevArray => {
            const nextArray = prevArray.map(point => {
                point.isSelected = false;
                return point;
            });
            nextArray.push(pointObj);
            return nextArray;
        });
    }

    function getHandlePointPercent(x) {
        const { left, right } = handlesAreaRef.current.getBoundingClientRect();
        return Math.round((x - left) / (right - left) * 100);
    }

    function setPointColor(color) {
        setPointArray(prevArray => prevArray.map(point => {
            if (point.isSelected) point.color = color;
            return point;
        }));
    }

    function setPointAlpha(alpha) {
        setPointArray(prevArray => prevArray.map(point => {
            if (point.isSelected) point.alpha = Number(alpha);
            return point;
        }));
    }

    function deletePoint() {
        if (pointArray.length <= 2) return;
        setPointArray(prevArray => {
            const filterArray = prevArray.filter(point => !point.isSelected)
            const minPosition = [...filterArray].sort((point1, point2) => point1.position - point2.position)[0].position;
            return filterArray.map(point => {
                if (point.position === minPosition) point.isSelected = true;
                return point;
            });
        })
    }

    // Values
    const selectedColor = pointArray.find(point => point.isSelected);

    // Elements
    const gradientHandleElements = pointArray.map((point, index) => {
        let _class = 'gradient__handle';
        if (point.isSelected) _class += ' selected';
        const stylesArray = {
            backgroundColor: point.color,
            left: `${point.position}%`
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

    let deleteDisabled = false;
    if (pointArray.length <= 2) {
        deleteDisabled = true;
    }
    const deleteButton = (
        <button 
            className="button is-danger is-outlined is-small" 
            disabled={deleteDisabled}
            onClick={deletePoint} >
            <span className="icon">
                <i className="far fa-trash-alt"></i>
            </span>
            <span>Delete color</span>
        </button>
    );

    const modeElements = modeArray.map(modeObj => {
        let classes = 'button';
        if (modeObj.key === mode) classes += ' is-dark is-selected'
        return (
            <button
                key={modeObj.key}
                className={classes}
                onClick={_ => setMode(modeObj.key)}>
                {modeObj.title}
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
                    onClick={_ => setLinearDeg(deg)}>
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
        const radialShapeElements = radialShapeArray.map(shapeObj => {
            let classes = 'button';
            if (shapeObj.key === radialShape) classes += ' is-dark is-selected'
            return (
                <button
                    key={shapeObj.key}
                    className={classes}
                    onClick={_ => setRadialShape(shapeObj.key)}>
                    {shapeObj.title}
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

    return (
        <MainSection extraClass="main__section-inputs" title="Background Gradient" subTitle="Customizing">
            <div className="inputs">
                <h5 className="title is-5">Colors</h5>
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
                            step="0.01"
                            value={selectedColor.alpha}
                            onChange={e => setPointAlpha(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">1</div>
                        </div>
                    </div>
                </div>
                {deleteButton}
                <h5 className="title has-margin-top is-5">Style</h5>
                <div className="buttons has-addons">
                    {modeElements}
                </div>
                {linearElement}
                {radialElement}
            </div>
        </MainSection>
    );
}

export default BackgroundGradient;
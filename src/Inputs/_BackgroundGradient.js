import React, { useState, useEffect, useRef, useCallback } from 'react';
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

const positionAsc = (point1, point2) => point1.position - point2.position;
const positionDesc = (point1, point2) => point2.position - point1.position;

function BackgroundGradient(props) {
    // Props, States, Ref
    const { updateOutput } = props;
    const [mode, setMode] = useState('linear');
    const [linearDeg, setLinearDeg] = useState(90);
    const [radialShape, setRadialShape] = useState('circle');

    const [pointArray, setPointArray] = useState([
        { color: '#1988f7', alpha: 1, position: 0, isSelected: true, isDragging: false },
        { color: '#f71988', alpha: 1, position: 100, isSelected: false, isDragging: false }
    ]);
    const handlesAreaRef = useRef(null);

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

    const onMouseMoveHandle = useCallback(e => {
        if (!pointArray.some(point => point.isDragging)) return;

        let percentX = getHandlePointPercent(e.clientX);
        if (percentX < 0) percentX = 0;
        else if (percentX > 100) percentX = 100;

        setPointArray(prevArray => prevArray.map(point => {
            if (point.isDragging) point.position = percentX;
            return point;
        }));
    }, [pointArray]);

    const onMouseUpHandle = useCallback(() => {
        document.body.classList.remove('is-unselectable');
        setPointArray(prevArray => prevArray.map(point => {
            point.isDragging = false;
            return point;
        }));
    }, []);

    function onClickHandlesArea(e) {
        const percentX = getHandlePointPercent(e.clientX);

        // Left right points
        const pointL = [...pointArray].sort(positionDesc).find(point => point.position < percentX);
        const pointR = [...pointArray].sort(positionAsc).find(point => point.position > percentX);

        // Color, alpha
        let color, alpha;
        if (pointL === undefined) {
            color = pointR.color;
            alpha = pointR.alpha;
        }
        else if (pointR === undefined) {
            color = pointL.color;
            alpha = pointL.alpha;
        }
        else {
            const {
                color: colorL,
                position: percentL,
                alpha: alphaL 
            } = pointL;
            const {
                color: colorR,
                position: percentR,
                alpha: alphaR 
            } = pointR;
            const ratio = (percentX - percentL) / (percentR - percentL);
            color = gradientMiddleHex(colorL, colorR, ratio);
            alpha = gradientMiddleAlpha(alphaL, alphaR, ratio);
        }

        const point = {
            color, alpha, position: percentX, 
            isSelected: true, isDragging: false
        }
        setPointArray(prevArray => {
            const nextArray = prevArray.map(_point => {
                _point.isSelected = false;
                return _point;
            });
            nextArray.push(point);
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
            const minPosition = [...filterArray].sort(positionAsc)[0].position;
            return filterArray.map(point => {
                if (point.position === minPosition) point.isSelected = true;
                else point.isSelected = false;
                return point;
            });
        })
    }

    // Effects
    useEffect(() => {
        window.addEventListener('mousemove', onMouseMoveHandle);
        window.addEventListener('mouseup', onMouseUpHandle);
        return () => {
            window.removeEventListener('mousemove', onMouseMoveHandle);
            window.removeEventListener('mouseup', onMouseUpHandle);
        }
    }, [onMouseMoveHandle, onMouseUpHandle]);

    useEffect(() => {
        const pointTextArray = [...pointArray].sort(positionAsc).map(point => 
            `${colorHexToRgba(point.color, point.alpha)} ${point.position}%`
        );

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
    }, [updateOutput, mode, linearDeg, radialShape, pointArray]);

    // Values
    const selectedPoint = pointArray.find(point => point.isSelected);

    // Elements
    const gradientHandleElements = pointArray.map((point, index) => {
        let handleClass = 'gradient__handle';
        if (point.isSelected) handleClass += ' selected';
        const styleArray = {
            backgroundColor: point.color,
            left: `${point.position}%`
        };
        return (
            <div key={index}
                className={handleClass}
                style={styleArray}
                onMouseDown={_ => onMouseDownHandle(index)}
                onClick={e => e.stopPropagation()}>
                <span className="icon has-text-white has-background-black-bis">
                    <i className="fas fa-angle-down fa-lg"></i>
                </span>
            </div>
        );
    });

    const deleteButton = (
        <button 
            className="button is-danger is-outlined is-small" 
            disabled={pointArray.length <= 2}
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
        const radialShapeElements = radialShapeArray.map(shape => {
            let classes = 'button';
            if (shape.key === radialShape) classes += ' is-dark is-selected'
            return (
                <button
                    key={shape.key}
                    className={classes}
                    onClick={_ => setRadialShape(shape.key)}>
                    {shape.title}
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
                            value={selectedPoint.color}
                            onChange={e => setPointColor(e.target.value)} />
                    </div>
                    <div className="control is-expanded">
                        <input
                            className="input"
                            type="text"
                            placeholder="HEX Color"
                            pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                            value={selectedPoint.color}
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
                            value={selectedPoint.alpha}
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
import React, { useCallback, useEffect, useRef } from 'react';
import { ChevronDown } from 'react-feather';
import PropTypes from 'prop-types';
import * as styles from './css/input.module.scss';
import {
  gradientMiddleAlpha,
  gradientMiddleHex,
  gradientPointSortAsc,
  gradientPointSortDesc,
} from '../helpers';

function _InputRangeGradient(props) {
  // - Props
  const {
    colorPointArray,
    selectedIndex,
    draggingIndex,
    onColorPointChange,
    onSelectedChange,
    onDraggingChange,
  } = props;
  const handleAreaRef = useRef();

  // - Function
  function getHandlePointPercent(nativeEvent) {
    if (!handleAreaRef.current) return 0;

    const { left, right } = handleAreaRef.current.getBoundingClientRect();
    let x = 0;
    if (!!window.TouchEvent && nativeEvent instanceof TouchEvent) {
      const touch = nativeEvent.changedTouches.item(0);
      x = touch.clientX - left;
    } else if (!!window.MouseEvent && nativeEvent instanceof MouseEvent) {
      x = nativeEvent.clientX - left;
    }

    return Math.round((x / (right - left)) * 100);
  }

  function onHandleDown(event, index) {
    event.preventDefault();
    document.body.classList.add('is-unselectable');
    onSelectedChange(index);
    onDraggingChange(index);
  }

  const onHandleMove = useCallback(
    event => {
      if (draggingIndex === -1) return;
      event.preventDefault();
      let percentX = getHandlePointPercent(event);
      if (percentX < 0) percentX = 0;
      else if (percentX > 100) percentX = 100;

      onColorPointChange(prevArray =>
        prevArray.map((point, index) => {
          if (index === draggingIndex) point.position = percentX;
          return point;
        })
      );
    },
    [draggingIndex, onColorPointChange]
  );

  const onHandleUp = useCallback(() => {
    document.body.classList.remove('is-unselectable');
    onDraggingChange(-1);
  }, [onDraggingChange]);

  function onHandleAreaClick(event) {
    const percentX = getHandlePointPercent(event.nativeEvent);

    // Left right points
    const pointL = [...colorPointArray]
      .sort(gradientPointSortDesc)
      .find(point => point.position < percentX);
    const pointR = [...colorPointArray]
      .sort(gradientPointSortAsc)
      .find(point => point.position > percentX);

    // Color, alpha
    let color, alpha;
    if (!pointL) {
      color = pointR.color;
      alpha = pointR.alpha;
    } else if (!pointR) {
      color = pointL.color;
      alpha = pointL.alpha;
    } else {
      const { color: colorL, position: percentL, alpha: alphaL } = pointL;
      const { color: colorR, position: percentR, alpha: alphaR } = pointR;
      const ratio = (percentX - percentL) / (percentR - percentL);
      color = gradientMiddleHex(colorL, colorR, ratio);
      alpha = gradientMiddleAlpha(alphaL, alphaR, ratio);
    }

    const point = { color, alpha, position: percentX };
    onColorPointChange(prevArray => [...prevArray, point]);
    onSelectedChange(colorPointArray.length);
  }

  // - Effects
  useEffect(() => {
    window.addEventListener('touchmove', onHandleMove, { passive: false });
    window.addEventListener('mousemove', onHandleMove);
    window.addEventListener('touchend', onHandleUp, { passive: false });
    window.addEventListener('mouseup', onHandleUp);
    return () => {
      window.removeEventListener('touchmove', onHandleMove, { passive: false });
      window.removeEventListener('mousemove', onHandleMove);
      window.removeEventListener('touchend', onHandleUp, { passive: false });
      window.removeEventListener('mouseup', onHandleUp);
    };
  }, [onHandleMove, onHandleUp]);

  // - Elements
  const gradientHandleElements = colorPointArray.map((point, index) => {
    const { color, position } = point;
    let handleClass = styles.rangeGradientHandle;
    if (index === selectedIndex) {
      handleClass += ` ${styles.rangeGradientHandleSelected}`;
    }
    const styleArray = {
      backgroundColor: color,
      left: `${position}%`,
    };
    return (
      <div
        key={`${index}`}
        className={handleClass}
        style={styleArray}
        role="button"
        tabIndex={0}
        onTouchStart={event => onHandleDown(event, index)}
        onMouseDown={event => onHandleDown(event, index)}
        onClick={event => event.stopPropagation()}
        onKeyPress={_ => {}}
      >
        <span className={`icon ${styles.rangeGradientIcon}`}>
          <ChevronDown width={20} height={20} strokeWidth={3.5} />
        </span>
      </div>
    );
  });

  return (
    <div className={`field ${styles.field}`}>
      <div className={styles.rangeGradient}>
        <div className={styles.rangeGradientBg}></div>
        <div
          className={styles.rangeGradientHandleArea}
          role="button"
          tabIndex={0}
          onClick={onHandleAreaClick}
          onKeyPress={_ => {}}
          ref={handleAreaRef}
        >
          {gradientHandleElements}
        </div>
      </div>
      <div className={styles.rangeText}>
        <div className={styles.rangeTextItem}>0%</div>
        <div className={styles.rangeTextItem}>100%</div>
      </div>
    </div>
  );
}

_InputRangeGradient.propTypes = {
  colorPointArray: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      alpha: PropTypes.number.isRequired,
      position: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  draggingIndex: PropTypes.number.isRequired,
  onColorPointChange: PropTypes.func.isRequired,
  onSelectedChange: PropTypes.func.isRequired,
  onDraggingChange: PropTypes.func.isRequired,
};

export default _InputRangeGradient;

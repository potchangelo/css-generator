import React from 'react';
import * as styles from './css/input.module.scss';

/**
 * @param {object} props
 * @param {number} [props.itemsPerRow=1]
 * @param {object[]} props.options
 * @param {string} props.options[].key
 * @param {string} props.options[].title
 * @param {*} props.options[].imageSrc
 * @param {string} props.activeKey
 * @param {import('react').SetStateAction} props.onButtonClick
 */
function _InputButtonImageGroup(props) {
  const { itemsPerRow, options, activeKey, onButtonClick } = props;

  let columnClass = 'column';
  if (itemsPerRow === 2) columnClass += ' is-6';
  else columnClass += ' is-12';

  const buttonElements = options.map(option => {
    const { key, title, imageSrc } = option;
    let buttonClass = `button ${styles.buttonImage}`;
    if (key === activeKey) buttonClass += ' is-dark is-selected';
    return (
      <div key={key} className={columnClass}>
        <label className="label">{title}</label>
        <p>
          <button
            className={buttonClass}
            onClick={_ => {
              onButtonClick(key);
            }}
          >
            <img src={imageSrc} alt={key} />
          </button>
        </p>
      </div>
    );
  });

  return <div className="columns is-mobile is-multiline content">{buttonElements}</div>;
}

export default _InputButtonImageGroup;

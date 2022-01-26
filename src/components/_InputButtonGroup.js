import React from 'react';

/**
 * @param {object} props
 * @param {string} [props.title]
 * @param {object[]} props.options
 * @param {string} props.options[].key
 * @param {string} [props.options[].title]
 * @param {import('react-feather').Icon} [props.options[].icon]
 * @param {string} props.activeKey
 * @param {import('react').SetStateAction} props.onButtonClick
 */
function _InputButtonGroup(props) {
  const { title, options, activeKey, onButtonClick } = props;

  let labelElement = null;
  if (!!title) labelElement = <label className="label">{title}</label>;

  const buttonElements = options.map(option => {
    const { key, title: buttonTitle, icon } = option;

    let classes = 'button';
    if (key === activeKey) classes += ' is-dark is-selected';

    let contentElement = null;
    if (!!icon) {
      contentElement = <span className="icon">{icon}</span>;
    } else {
      contentElement = <span>{buttonTitle}</span>;
    }

    return (
      <button
        key={key}
        className={classes}
        onClick={_ => {
          onButtonClick(key);
        }}
      >
        {contentElement}
      </button>
    );
  });

  return (
    <>
      {labelElement}
      <div className="buttons has-addons">{buttonElements}</div>
    </>
  );
}

export default _InputButtonGroup;

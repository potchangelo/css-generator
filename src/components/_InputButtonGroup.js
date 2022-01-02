import React from 'react';
import PropTypes from 'prop-types';

function _InputButtonGroup(props) {
  // - Props
  const { title, optionArray, activeKey, onButtonClick } = props;

  // - Elements
  let labelElement = null;
  if (!!title) labelElement = <label className="label">{title}</label>;

  const buttonElements = optionArray.map(option => {
    const { key, title: _title, icon } = option;

    let classes = 'button';
    if (key === activeKey) classes += ' is-dark is-selected';

    let contentElement = null;
    if (!!icon) {
      contentElement = <span className="icon">{icon}</span>;
    } else {
      contentElement = <span>{_title}</span>;
    }

    return (
      <button key={key} className={classes} onClick={() => onButtonClick(key)}>
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

_InputButtonGroup.propTypes = {
  title: PropTypes.string,
  optionArray: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string,
      icon: PropTypes.element,
    })
  ).isRequired,
  activeKey: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default _InputButtonGroup;

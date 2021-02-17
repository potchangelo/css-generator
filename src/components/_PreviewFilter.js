import React from 'react';
import PropTypes from 'prop-types';

function PreviewFilter(props) {
    const { outputStyle } = props;
    return (
        <img
            src="https://images.unsplash.com/photo-1433888104365-77d8043c9615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"
            alt="Preview"
            style={outputStyle}
        />
    );
}

PreviewFilter.propTypes = {
    outputStyle: PropTypes.object.isRequired,
};

export default PreviewFilter;
import React from 'react';

/**
 * @param {object} props
 * @param {import('react').CSSProperties} props.outputStyle
 */
function _PreviewText(props) {
  const { outputStyle } = props;
  return (
    <p style={outputStyle}>
      Praesent eget tempus leo. Curabitur sit amet enim in lorem placerat consequat ac at nunc. Curabitur eget est
      ultricies, tincidunt augue efficitur, pellentesque nulla. Vivamus non aliquet libero, ut tincidunt diam. Quisque
      nec nulla ut erat pretium ultricies quis nec dolor. Etiam sed leo lorem. Sed sagittis arcu lacus, eget dapibus
      nulla aliquet in.
    </p>
  );
}

export default _PreviewText;

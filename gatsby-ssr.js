import React from 'react';
import { App } from './src/layouts';

/**
 * @param {{element: import('react').ReactElement, props: import('gatsby').PageProps }} a
 */
function wrapPageElement({ element, props }) {
  if (props.pageResources.page.path.includes(404)) {
    return element;
  }
  return <App {...props}>{element}</App>;
}

export { wrapPageElement };

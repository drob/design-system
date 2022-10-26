import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { ReactLiquid, liquidEngine } from 'react-liquid';
import { marked } from 'marked';
import template from '../../../_includes/generic-content.html';

export default function Preview({ entry }) {
  useEffect(() => {
    liquidEngine.registerFilter('markdownify', (initial) =>
      marked(initial || '')
    );
  });

  const data = {
    page: entry.toJS().data,
  };
  return (
    <div>
      <ReactLiquid template={template} data={data} html />
    </div>
  );
}

Preview.propTypes = {
  entry: PropTypes.object,
};

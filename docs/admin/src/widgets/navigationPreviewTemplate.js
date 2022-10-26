import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { ReactLiquid, liquidEngine } from 'react-liquid';
import slugify from 'slugify';
import template from '../../../_includes/sidebar.html';

export default function Preview(props) {
  useEffect(() => {
    liquidEngine.registerFilter('size', (initial) => initial.length || 1);
    liquidEngine.registerFilter(
      'relative_url',
      (initial) => `/design-system/${initial}`
    );
    liquidEngine.registerFilter('slugify', (initial) =>
      slugify(initial || '', { lower: true })
    );
  });

  const data = {
    site: {
      data: {
        'side-navigation': props.entry.toJS().data,
      },
    },
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

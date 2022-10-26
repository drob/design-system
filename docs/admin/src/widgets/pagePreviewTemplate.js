import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { ReactLiquid, liquidEngine } from 'react-liquid';
import {
  TOGGLE_ATTRIBUTE,
  toggleDetails,
} from '../../../assets/js/toggle-details.js';
import Tabs from '../../../assets/js/Tabs.js';
import { encode } from 'html-entities';
import { marked } from 'marked';
import slugify from 'slugify';
import template from '../../../_includes/variation-content.html';

// react-liquid (https://github.com/aquibm/react-liquid/) isn't able to `include` other files so we
// replace instances of {% include icons/XXXXX.svg %} with the inlined SVG
const templateWithIcons = template.replace(
  /{%\s+include\s+\/?icons\/([\w-]+)\.svg\s+%}/g,
  (match, icon) => require(`../../../_includes/icons/${icon}.svg`)
);

export default function Preview(props) {
  const containerRef = React.createRef();

  useEffect(() => {
    liquidEngine.registerFilter('slugify', (initial) =>
      slugify(initial || '', { lower: true })
    );
    liquidEngine.registerFilter('xml_escape', (initial) => encode(initial));
    liquidEngine.registerFilter('markdownify', (initial) =>
      marked(initial || '')
    );
    liquidEngine.registerFilter(
      'strip',
      (initial) => initial && initial.trim()
    );

    // Tabs show under the show/hide details button on a pattern.
    const tabsContainerDom = props.document.querySelectorAll(
      `.${Tabs.BASE_CLASS}`
    );
    if (tabsContainerDom.length > 0) {
      let tabsInst;
      for (let i = 0, len = tabsContainerDom.length; i < len; i++) {
        tabsInst = new Tabs(tabsContainerDom[i]);
        tabsInst.init();
      }
    }
  }, []);

  /**
   * @param {MouseEvent} event - The mouse event object from the click.
   */
  const handleClick = (event) => {
    const target = event.target;
    if (target.matches(`[${TOGGLE_ATTRIBUTE}]`)) {
      event.preventDefault();
      toggleDetails(target, containerRef.current);
    }
  };

  const data = {
    page: props.entry.toJS().data,
  };
  return (
    // TODO: We're breaking some a11y here by making the whole page clickable.
    // eslint-disable-next-line
    <div ref={containerRef} onClick={(event) => handleClick(event)}>
      <ReactLiquid template={templateWithIcons} data={data} html />
    </div>
  );
}

Preview.propTypes = {
  entry: PropTypes.object,
  document: PropTypes.node,
};

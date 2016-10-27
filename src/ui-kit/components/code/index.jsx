import React, { PropTypes } from 'react';
import Highlight from 'react-highlight';
import styled from "styled-components";

const Root = styled.div`
  /*
  Date: 17.V.2011
  Author: pumbur <pumbur@pumbur.net>
  */

  pre {
    margin: 0;
  }

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #222;
    border-radius: 3px;
  }

  .hljs,
  .hljs-subst {
    color: #aaa;
  }

  .hljs-section {
    color: #fff;
  }

  .hljs-comment,
  .hljs-quote,
  .hljs-meta {
    color: #444;
  }

  .hljs-string,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-regexp {
    color: #ffcc33;
  }

  .hljs-number,
  .hljs-addition {
    color: #00cc66;
  }

  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-literal,
  .hljs-type,
  .hljs-template-variable,
  .hljs-attribute,
  .hljs-link {
    color: #32aaee;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class {
    color: #6644aa;
  }

  .hljs-title,
  .hljs-variable,
  .hljs-deletion,
  .hljs-template-tag {
    color: #bb1166;
  }

  .hljs-section,
  .hljs-doctag,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-emphasis {
    font-style: italic;
  }

`;

const displayName = 'Code';
const defaultProps = {};
const propTypes = {
  children: PropTypes.node,
};

const component = (props) => (
  <Root>
    <Highlight>
      {props.children}
    </Highlight>
  </Root>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;

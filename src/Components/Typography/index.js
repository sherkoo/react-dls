import React from 'react';
import { LabelStyle } from './typography.style';

function H1(props) {
  return (
    <h1>
      {props.label}
    </h1>
  );
}

function H2(props) {
  return (
    <h2>
      {props.label}
    </h2>
  );
}

function H3(props) {
  return (
    <h3>
      {props.label}
    </h3>
  );
}

function Paragraph(props) {
  return (
    <p>
      {props.label}
    </p>
  );
}

function Label(props) {
  return (
    <LabelStyle>
      {props.label}
    </LabelStyle>
  );
}

export { H1, H2, H3, Paragraph, Label };
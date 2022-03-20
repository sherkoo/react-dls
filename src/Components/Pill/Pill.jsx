import React from 'react';
import PropTypes from 'prop-types';
import * as style from './Pill.styles';

const Pill = (props) => (
  <style.Pill>
    {props.label}
  </style.Pill>
);

Pill.propTypes = {
  label: PropTypes.string,
};

Pill.defaultProps = {
  label: 'Label...',
};

export default Pill;

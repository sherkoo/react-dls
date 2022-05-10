import React from 'react';
import PropTypes from 'prop-types';
import * as style from './Grid.styles';

const Grid = (props) => (
  <style.Grid columns={props.columns}>
    {props.children}
  </style.Grid>
);

Grid.propTypes = {
  // bla: PropTypes.string,
};

Grid.defaultProps = {
  children: 'put things here',
  columns: 0
};

export default Grid;

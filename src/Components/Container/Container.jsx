import React from 'react';
import PropTypes from 'prop-types';
import * as style from './Container.styles';

const Container = (props) => (
  <style.Container>
    <div>
      <hr />
      <div>
        <h2>{props.title}</h2>
      </div>
      {props.children}
    </div>
  </style.Container>
);

Container.propTypes = {
  // bla: PropTypes.string,
};

Container.defaultProps = {
  children: 'insert children...',
};

export default Container;

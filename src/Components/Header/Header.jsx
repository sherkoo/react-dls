import React from 'react';
import PropTypes from 'prop-types';
import * as style from './Header.styles';

const Nav = (props) => (
  <style.Nav>
    <div>Link</div>
    <div>Link</div>
    <div>Link</div>
    <div>Link</div>
  </style.Nav>
)

const Header = (props) => (
  <style.Header>
    <h2>Logo</h2>
    <Nav />
  </style.Header>
);

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;

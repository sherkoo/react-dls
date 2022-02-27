import React from 'react';

function NavigationLink(props) {
  return (
    <div>
      <div>{props.icon}</div>
      <div>{props.label}</div>
    </div>
  )
}

function Navigation(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default Navigation;
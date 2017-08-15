import React from 'react';

const FilterLink = ({
  filter,
  activeFilter,
  onClick,
  children
}) => {
  if(filter === activeFilter) {
    return <span>{children}</span>
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick(filter)
      }}
    >
      {children}
    </a>
  );
};
export { FilterLink };
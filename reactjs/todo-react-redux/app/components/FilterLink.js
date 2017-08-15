import React from 'react';

class FilterLink extends React.Component {
  render() {
    const {filter, activeFilter, onClick, children} = this.props;
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
  }
}
export { FilterLink };
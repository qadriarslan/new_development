import React from 'react';

class FilterLink extends React.Component {
  render() {
    const {filterText, activeFilter, onClick} = this.props;
    if(filterText === activeFilter) {
      return <span>{filterText}</span>
    }
    return (
      <a
        href="#"
        onClick={() => onClick(filterText)}
      >
        {filterText}
      </a>
    );
  }
}
export { FilterLink };
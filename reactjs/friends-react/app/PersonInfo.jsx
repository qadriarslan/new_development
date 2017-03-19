import React from 'react'

class PersonInfo extends React.Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Profession: {this.props.profession}</p>
            </div>
        );
    }
}

export default PersonInfo
import React from 'react'

class AddFriend extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            profession: ""
        };
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    handleProfessionChange(e) {
        this.setState({profession: e.target.value})
    }

    handleClick() {
        if(this.state.name !== "" && this.state.profession !== "") {
            this.props.addFriend({name: this.state.name, profession: this.state.profession});
            this.setState({name: "",profession: ""});
        } else {
            alert("Name and Profession can't be empty.")
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleNameChange.bind(this)}/>
                <input type="text" value={this.state.profession} placeholder="Profession" onChange={this.handleProfessionChange.bind(this)}/>
                <button onClick={this.handleClick.bind(this)}>Add Friend</button>
            </div>
        )
    }
}

AddFriend.propTypes = {
    addFriend: React.PropTypes.func.isRequired
};

export default AddFriend
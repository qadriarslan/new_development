import React, {Component} from "react"

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "Arslan Qadri",
            profession: "SDE",
            friends: []
        };
    }

    addFriend(friend) {
        this.setState({friends: this.state.friends.concat(friend)})
    }

    changeProfession(newProfession) {
        this.setState({profession: newProfession})
    }

    render() {
        return (
            <div>
                <PersonInfo name={this.state.name} profession={this.state.profession}></PersonInfo>
                <FriendsList friends={this.state.friends}></FriendsList>
                <AddFriends addFriend={this.addFriend.bind(this)}></AddFriends>
            </div>
        );
    }
}

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

class FriendsList extends React.Component {
    render() {
        let friends = this.props.friends.map(function(friend, counter) {
            return <p key={counter}>Name: {friend.name}, Profession: {friend.profession}</p>
        })
        return (
            <div>
                Friends: [
                {friends}
                ]
            </div>
        );
    }
}

FriendsList.defaultProps = {
    friends: []
};

class AddFriends extends React.Component {
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
        this.props.addFriend({name: this.state.name, profession: this.state.profession});
        this.setState({name: "",profession: ""});
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

AddFriends.propTypes = {
    addFriend: React.PropTypes.func.isRequired
};

export default App
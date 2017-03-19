import React, {Component} from "react"
import PersonInfo from './PersonInfo.jsx'
import FriendsList from './FriendsList.jsx'
import AddFriend from './AddFriend.jsx'

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
                <AddFriend addFriend={this.addFriend.bind(this)}></AddFriend>
            </div>
        );
    }
}

export default App
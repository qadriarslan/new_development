import React, {Component} from "react"
import PersonInfo from './PersonInfo.jsx'
import FriendsList from './FriendsList.jsx'
import AddFriend from './AddFriend.jsx'
import friendsStore from '../stores/friendsStore'
import friendsActions from '../actions/friendsActions'

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: friendsStore.getName(),
            profession: friendsStore.getProfession(),
            friends: friendsStore.getFriends()
        };
    }

    componentDidMount() {
        friendsStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        friendsStore.removeChangeListener(this._onChange.bind(this));
    }

    handleAddFriend(friend) {
        friendsActions.addFriend(friend);
    }

    _onChange() {
        this.setState({friends: friendsStore.getFriends()})
    }

    render() {
        return (
            <div>
                <PersonInfo name={this.state.name} profession={this.state.profession}></PersonInfo>
                <FriendsList friends={this.state.friends}></FriendsList>
                <AddFriend addFriend={this.handleAddFriend.bind(this)}></AddFriend>
            </div>
        );
    }
}

export default App
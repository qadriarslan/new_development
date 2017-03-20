import React, {Component} from "react"
import PersonInfo from './PersonInfo.jsx'
import FriendsList from './FriendsList.jsx'
import AddFriend from './AddFriend.jsx'
import ModifyPersonInfo from './ModifyPersonInfo.jsx'
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

    handleModifyPersonInfo(name, profession) {
        friendsActions.modifyPersonInfo(name, profession);
    }

    _onChange() {
        this.setState({
            name: friendsStore.getName(),
            profession: friendsStore.getProfession(),
            friends: friendsStore.getFriends()
        });
    }

    render() {
        return (
            <div>
                <PersonInfo name={this.state.name} profession={this.state.profession}></PersonInfo>
                <FriendsList friends={this.state.friends}></FriendsList>
                <AddFriend addFriend={this.handleAddFriend.bind(this)}></AddFriend>
                <ModifyPersonInfo modifyPersonInfo={this.handleModifyPersonInfo.bind(this)}></ModifyPersonInfo>
            </div>
        );
    }
}

export default App
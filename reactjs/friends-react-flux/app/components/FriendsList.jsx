import React from 'react'

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

export default FriendsList
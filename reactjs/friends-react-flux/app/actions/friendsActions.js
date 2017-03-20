import AppDispatcher from '../dispatchers/AppDispatcher'
import appConstants from '../constants/appConstants'

let friendsActions = {
    addFriend: function(friend) {
        AppDispatcher.handleAction({
            actionType: appConstants.ADD_FRIEND,
            data: friend
        });
    }
}

export default friendsActions;
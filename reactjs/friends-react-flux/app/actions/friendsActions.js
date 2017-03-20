import AppDispatcher from '../dispatchers/AppDispatcher'
import appConstants from '../constants/appConstants'

let friendsActions = {
    addFriend: function(friend) {
        AppDispatcher.handleAction({
            actionType: appConstants.ADD_FRIEND,
            data: friend
        });
    },
    modifyPersonInfo: function(name, profession) {
        AppDispatcher.handleAction({
            actionType: appConstants.MODIFY_PERSON_INFO,
            data: {
                name: name,
                profession: profession
            }
        });
    }
}

export default friendsActions;
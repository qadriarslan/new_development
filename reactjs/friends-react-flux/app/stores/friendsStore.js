import AppDispatcher from '../dispatchers/AppDispatcher'
import appConstants from '../constants/appConstants'
import assign from 'object-assign';
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

let _store = {
    name: 'Arslan Qadri',
    profession: 'Software Engineer',
    friends: []
}

function addFriend(friend) {
    _store.friends.push(friend);
}
function modifyPersonInfo(personInfo) {
    _store.name = personInfo.name;
    _store.profession = personInfo.profession;
}

let friendsStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callBack) {
        this.on(CHANGE_EVENT, callBack);
    },
    removeChangeListener: function(callBack) {
        this.removeListener(CHANGE_EVENT, callBack);
    },
    getName: function() {
        return _store.name;
    },
    getProfession: function() {
        return _store.profession;
    },
    getFriends: function() {
        return _store.friends;
    }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.ADD_FRIEND:
      addFriend(action.data);
      friendsStore.emit(CHANGE_EVENT);
      break;
    case appConstants.MODIFY_PERSON_INFO:
      modifyPersonInfo(action.data);
      friendsStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});
export default friendsStore
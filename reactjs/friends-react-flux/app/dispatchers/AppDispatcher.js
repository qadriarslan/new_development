import assign from 'object-assign';
let Dispatcher = require('flux').Dispatcher;

var AppDispatcher = assign(new Dispatcher(), {
    handleAction: function(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});

export default AppDispatcher
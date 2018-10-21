const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};

// change code below this line
const mapDispatchToProps = dispatch => {
    return {
        submitNewMessage: function (message) {
            dispatch(addMessage(message))
        }
    }
}


// *************
// For example, you have a loginUser() action creator that takes a username 
// as an action payload. The object returned from mapDispatchToProps() 
// for this action creator would look something like:

// {
//   submitLoginUser: function(username) {
//     dispatch(loginUser(username));
//   }
// }
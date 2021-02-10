// Action creator for adding user
// This function accept the new user we'll be adding
// Since this function would be used outside of this file, we need to export it as a named export
export const addUser = (newUser) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore
          .collection("users")
          .add(newUser)
          .then((res) => {
             console.log("user added Successfully", newUser)
          })
          .catch((err) => {
             console.log("sorry there was an error", err)
          })
    };
};

// action creator for deleting user
export const deleteUser = (userId) => {
    // checking to see if our action creator here is fired when the button is clicked using console.log
    // console.log("action fired", userId)
    return {
        type: "DELETE_USER",
        payload: userId,
    };
};

// Action creator for editing user
export const editUser = (updatedUser) => {
    return {
        type: "EDIT_USER",
        payload: updatedUser, // userId can be fetch from updatedUser that's why userId is not included as parameter
    };
};

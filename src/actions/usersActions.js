// Action creator for adding user
// This function accept the new user we'll be adding
// Since this function would be used outside of this file, we need to export it as a named export
export const addUser = (newUser) => {
    // returning an action which is basically on object that has type and payload
    newUser.id=Math.random().toString()
    return {
        type: "ADD_USER",
        payload: newUser,
    }
}

// action creator for deleting user
export const deleteUser = (userId) => {
    // checking to see if our action creator here is fired when the button is clicked using console.log
    // console.log("action fired", userId)
    return {
        type: "DELETE_USER",
        payload: userId,
    }
}

// Action creator for editing user
export const editUser = (updatedUser) => {
    return {
        type: "EDIT_USER",
        payload: updatedUser, // userId can be fetch from updatedUser that's why userId is not included as parameter
    }
}

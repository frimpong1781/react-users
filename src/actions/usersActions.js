// Action creator for adding user
// This function accept the new user we'll be adding
// Since this function would be used outside of this file, we need to export it as a named export
export const addUser = (newUser) => {
    // returning an action which is basically on object that has type and payload
    newUser.id=Math.random().toString()
    return {
        type: "ADD_USER",
        payload: newUser
    }
}


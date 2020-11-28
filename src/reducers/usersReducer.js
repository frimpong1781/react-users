const initialState = {
    users: [
        {
          name: "James Frimpong",
          email: "jfrimpong",
          gen: 2,
          id: "hhfjj"
        },
        {
          name: "Princess Linda Mensah",
          email: "linda@gmail.com",
          gen: 2,
          id: "hghghg"
        },
        {
          name: "Janet Something",
          email: "jane19@yahoo.com",
          gen: 15,
          id: "jgfjf"
        }
      ],
};

// Use the initialState as a default value
const usersReducer = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
        case "ADD_USER":
            console.log(action.payload)
            return {...state, users: [...state.users, action.payload]};
    
        default:
          // If this reducer doesn't recognize the action type, or doesn't
          // care about this specific action, return the existing state unchanged
            return state;
    }
}

export default usersReducer;
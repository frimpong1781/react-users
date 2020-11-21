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

const usersReducer = (state = {initialState}, action) => {
    switch (action.type) {
        case "ADD_USER":
                return state;
    
        default:
            return state;
    }
}

export default usersReducer;
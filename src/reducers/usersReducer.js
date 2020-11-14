const initialState = {
    users: [
        {name: "james", email: "hshdjsdj@yahoo.com", gen: 12},
        {name: "Kwame", email: "frimpong1781@yahoo.com", gen: 12},
        {name: "Owusu", email: "cybrotec@gmail.com", gen: 12}
    ],
};

const usersReducer = (state = {initialState}, action) => {
    switch (action.type) {
        case "ADD_USER":
                return state;
            break;
    
        default:
            return state;
    }
}

export default usersReducer;


export const initialItemState = {
    title: "Todo List!",
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

export const itemReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_ITEM":
            if(!action.payload){
                return {
                    ...state,
                    editing: !state.editing
                };
            } else {
                return {
                    ...state,
                    item: action.payload,
                    editing: !state.editing
                };
            }
            case "TOGGLE_EDITING":
                return {
                    ...state,
                    editing: !state.editing
                };
            case "DELETE_ITEM":
                return{
                    ...state,
                    item:"",
                    editing: !state.editing
                };
                default: 
                    return state;
             }
            };
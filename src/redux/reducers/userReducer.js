import { UPDATE_USER } from '../actions/index';

const userReducer = (state = [], action) => {
    switch(action.type){
        case UPDATE_USER: 
        return action.payload;

        default:
            return state;
    }
}

export default userReducer;
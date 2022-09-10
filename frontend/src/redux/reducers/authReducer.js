const initialState = {
    user: {}
}

export default function authReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'user-info': {
            return {
                ...state,
                user: {
                    payload
                }
            }
        }
        default:
            return state;
    }
}
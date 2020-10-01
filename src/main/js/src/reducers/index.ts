interface Action {
    type: string,
    users: Array<any>
}

export function userReducer(state = [], action: Action): any {
    switch (action.type) {
        case 'USERS_REQUESTED':
            return { ...state, isUpdating: true, users: [] }
        case 'USERS_RECEIVED':
            return { ...state, isUpdating: false, users: action.users }
        default:
            return state;
      }
}
const initialState = {
    user: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case typeName:
            return { ...state, ...payload }
        case typeName:
            return { ...state, ...payload }
        case typeName:
            return { ...state, ...payload }
        default:
            return state
    }
}

const SET_DIVISION_TABLE = 'SET-DIVISION-TABLE'

let initialState = {
    divisions: []
}

const divisionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIVISION_TABLE:
            return {
                ...state, divisions: action.data
            }
        default:
            return state

    }
}

export let setDivisionTable = (data) => ({type: SET_DIVISION_TABLE, data})

export default divisionsReducer
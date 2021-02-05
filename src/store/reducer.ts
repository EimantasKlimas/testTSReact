import * as actionTypes from "./actionTypes"

const initialState: SelectedPostsState = {
    posts: []
}

const reducer = (state: SelectedPostsState = initialState, action: PostAction) => {
    switch(action.type) {
        case actionTypes.SELECT_POST:
            const s= {
                ...state,
                posts: state.posts.concat(action.post)
            }

            console.log(s)
            return s
        case actionTypes.DESELECT_POST:
            return {
                ...state,
                posts: state.posts.concat(action.post)
            }
    }

    return state
}

export default reducer;
import * as actionTypes from "./actionTypes"

export function selectPost(post: Post): PostAction {
    const action: PostAction = {
        type: actionTypes.SELECT_POST,
        post: post
    }

    return action
}

export function deselectPost(post: Post): PostAction {
    const action: PostAction = {
        type: actionTypes.DESELECT_POST,
        post: post
    }

    return action
}
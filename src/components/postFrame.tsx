import React, { useState, useEffect, FC, Dispatch } from "react";
import axios, {AxiosResponse} from 'axios';
import { useDispatch, useSelector,shallowEqual } from "react-redux"
import * as actions from "../store/actionCreators"

import {PostData} from "./postData";

const PostFrame: FC = () => {
    const selectedPosts: readonly Post[] = useSelector(
        (state: SelectedPostsState) => state.posts,
        shallowEqual
      )

    const [posts, setPosts] = useState<Post[]>([])
    
    useEffect(() => {
        async function getPosts() {
            await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setPosts(response.data)
            })
        }
        getPosts();
    }, [])

    const dispatch: Dispatch<any> = useDispatch()

    const selectPost = (post: Post): any => {
        console.log(post.id)
        dispatch(actions.selectPost(post))
    }

    return(
        <div>
            {posts.map((post) =>
            <PostData key ={post.id} postProps={
                {
                    post: post,
                    selectPost: selectPost
                }
            }/>
            )}
        </div>
    )
}

export {PostFrame};
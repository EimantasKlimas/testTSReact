interface Post {
    userId: number
    id: number
    title: string
    body: string 
}

interface PostProps {
    post: Post
    selectPost: (post: Post) => any;
}

type  SelectedPostsState = {
    posts: Post[]
}

type PostAction = {
    type: string
    post: Post
}

type DispatchType = (args) => PostAction

